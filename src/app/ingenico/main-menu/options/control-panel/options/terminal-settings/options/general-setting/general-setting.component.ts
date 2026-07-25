import { Component, ElementRef, HostListener } from '@angular/core';
import { pinService } from '@pin/pin.service';
import {scrollbarService} from '@link-2500/link-2500-scrollbar.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-setting',
  imports: [],
  templateUrl: './general-setting.component.html',
  styleUrl: './general-setting.component.css'
})
export class GeneralSettingComponent {

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
    
    this.pinpadService.reset();
    console.log("pushing: ", this.currentURL)
    this.pinpadService.pushToHistory(this.currentURL)
    this.scrollbarService.removeScrollstyle();
  }

}
