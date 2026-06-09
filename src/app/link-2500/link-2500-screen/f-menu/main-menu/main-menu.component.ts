import { AfterViewInit, Component, QueryList, ViewChildren, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { OptionButtonComponent } from '../../../../option-button/option-button.component';
import { Link2500PinpadService } from '../../../link-2500-pinpad/link-2500-pinpad.service';
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
    private el: ElementRef,
    private cdr: ChangeDetectorRef
  ){}
  private sub!: Subscription
  private sub2!: Subscription
  test = '100px'
  @ViewChildren(OptionButtonComponent) buttons !: QueryList<OptionButtonComponent>
  
  ngAfterViewInit(): void {
    // this.cdr.detectChanges();
    console.log("buttons: ", this.buttons.length);

    this.applyScrollstyle();
    console.log('DOM view is fully ready in main menue.');
  }
  @HostListener('window:resize')
  onResize() {
    this.applyScrollstyle();
  }
  
  applyScrollstyle(){
    const screen = this.el.nativeElement.querySelector('.main-manue-screen');
    if (!screen) return;

    const width = screen.getBoundingClientRect().width;
    const scrollbarSize = width * 0.047; // 4% like your 4cqw
    const paddingSize = width * 0.015; // 1% like your 1cqw
    const marginSize = width * 0.01;
    const styleId = 'scrollbar-styles';
    console.log("in main this is scrollbar width: ", width)
    let style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }

    style.innerHTML = `
      .main-manue-screen::-webkit-scrollbar {
        width: ${scrollbarSize}px !important;
      }
      .main-manue-screen::-webkit-scrollbar-thumb {
        background: rgba(255,255,255);
        border-radius: 999px;
        border-left: ${paddingSize}px solid transparent;
        border-right: ${paddingSize}px solid transparent;
        background-clip: content-box;
      }
      .main-manue-screen::-webkit-scrollbar-track {
        margin-bottom: ${marginSize}px;
      }
    `;
  }

  ngOnDestroy() {
    //when the main menu is done it will reset everything
    this.pinpadService.reset();
    // this.sub.unsubscribe();  // cleanup when screen changes
  }

}
