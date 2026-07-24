import { AfterViewInit, Component, QueryList, ViewChildren, ElementRef, HostListener, ChangeDetectorRef, viewChild, ViewChild, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { OptionButtonComponent } from '../option-button/option-button.component';
import { scrollbarService } from '../../link-2500/link-2500-scrollbar.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { pinService } from '../pin/pin.service';


@Component({
  selector: 'app-main-menu',
  imports: [HeaderComponent,OptionButtonComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements AfterViewInit, OnInit{
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
  //stop mouse wheel from scrolling on menu
  @HostListener('wheel', ['$event'])
    onWheel(event: WheelEvent) {
      event.preventDefault();
  }
  @HostListener('window:resize')
  onResize() {
    this.scrollbarService.applyScrollstyle(this.el.nativeElement);
  }
  

  ngOnDestroy() {
    
    this.pinpadService.pushToHistory(this.currentURL)
    this.scrollbarService.removeScrollstyle();
    this.pinpadService.reset()
  }

}
