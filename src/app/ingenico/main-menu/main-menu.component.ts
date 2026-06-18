import { AfterViewInit, Component, QueryList, ViewChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { OptionButtonComponent } from '../option-button/option-button.component';
import { Link2500PinpadService } from '../../link-2500/link-2500-pinpad/link-2500-pinpad.service';
import { scrollbarService } from '../../link-2500/link-2500-scrollbar.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  imports: [HeaderComponent,OptionButtonComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements AfterViewInit {

  constructor(
    private pinpadService: Link2500PinpadService,
    private scrollbarService: scrollbarService,
    private el: ElementRef,
  ){}
  @ViewChildren(OptionButtonComponent) buttons !: QueryList<OptionButtonComponent>
  
  ngAfterViewInit(): void {
    this.scrollbarService.applyScrollstyle(this.el.nativeElement);
  }
  @HostListener('window:resize')
  onResize() {
    this.scrollbarService.applyScrollstyle(this.el.nativeElement);
  }
  

  ngOnDestroy() {
    this.pinpadService.reset();
    this.scrollbarService.removeScrollstyle();
  }

}
