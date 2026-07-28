import { Component, ElementRef, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from "@header/header.component";
import { OptionButtonComponent } from '@option-button/option-button.component';
import { pinService } from '@pin/pin.service';
import { scrollbarService } from '@link-2500/link-2500-scrollbar.service'

@Component({
  selector: 'app-tda',
  imports: [],
  templateUrl: './tda.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tda.component.css'
})
export class TDAComponent {
  private currentURL:string = ''
  constructor(
    private pinpadService: pinService,
    private scrollbarService: scrollbarService,
    private el: ElementRef,
    private router: Router
  ){}
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
    this.scrollbarService.removeScrollstyle();
    this.pinpadService.reset();
  }

}
