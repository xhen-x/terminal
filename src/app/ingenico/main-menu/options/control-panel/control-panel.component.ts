import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from "@header/header.component";
import { OptionButtonComponent } from '@option-button/option-button.component';
import { pinService } from '@pin/pin.service';
import { scrollbarService } from '@link-2500/link-2500-scrollbar.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  imports: [HeaderComponent,OptionButtonComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  private currentURL:string = ''
  constructor(
    private pinpadService: pinService,
    private scrollbarService: scrollbarService,
    private el: ElementRef,
    private router: Router
  ){}
  @ViewChildren(OptionButtonComponent) buttons !: QueryList<OptionButtonComponent>
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  ngOnInit():void {
    this.pinpadService.setBackMode('menu')
    this.pinpadService.setKeyMode('number')
  }
  ngAfterViewInit(): void {
    
    this.scrollbarService.applyScrollstyle(this.el.nativeElement);
    this.currentURL = this.router.url
  }
  @HostListener('wheel', ['$event'])
    onWheel(event: WheelEvent) {
      event.preventDefault();
  }
  @HostListener('window:resize')
  onResize() {
    this.scrollbarService.applyScrollstyle(this.el.nativeElement);
  }

  ngOnDestroy() {
    console.log("pushing: ", this.currentURL)
    this.pinpadService.pushToHistory(this.currentURL)
    this.pinpadService.reset();
    this.scrollbarService.removeScrollstyle();
  }
}
