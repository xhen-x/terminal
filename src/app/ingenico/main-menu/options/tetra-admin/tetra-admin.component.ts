import { Component , ElementRef, HostListener } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";
import { OptionButtonComponent } from "../../../option-button/option-button.component";
import { pinService } from '../../../pin/pin.service';
import { Router } from '@angular/router';
import { scrollbarService } from '../../../../link-2500/link-2500-scrollbar.service'

@Component({
  selector: 'app-tetra-admin',
  imports: [HeaderComponent, OptionButtonComponent],
  templateUrl: './tetra-admin.component.html',
  styleUrl: './tetra-admin.component.css'
})
export class TetraAdminComponent {

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
