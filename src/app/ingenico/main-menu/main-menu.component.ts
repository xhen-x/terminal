import { AfterViewInit, Component, QueryList, ViewChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { OptionButtonComponent } from '../option-button/option-button.component';
import { Link2500PinpadService } from '../../link-2500/link-2500-pinpad/link-2500-pinpad.service';
import { scrollbarService } from '../../link-2500/link-2500-scrollbar.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [HeaderComponent,OptionButtonComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements AfterViewInit {
  private currentURL:string = ''
  constructor(
    private pinpadService: Link2500PinpadService,
    private scrollbarService: scrollbarService,
    private el: ElementRef,
    private router: Router
  ){}
  @ViewChildren(OptionButtonComponent) buttons !: QueryList<OptionButtonComponent>
  
  ngAfterViewInit(): void {
    this.scrollbarService.applyScrollstyle(this.el.nativeElement);
    this.currentURL = this.router.url
  }
  @HostListener('window:resize')
  onResize() {
    this.scrollbarService.applyScrollstyle(this.el.nativeElement);
  }
  

  ngOnDestroy() {
    
    this.pinpadService.reset();
    this.pinpadService.pushToHistory(this.currentURL)
    this.scrollbarService.removeScrollstyle();
  }

}
