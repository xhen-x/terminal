import { AfterViewInit, Component, QueryList, ViewChildren, viewChildren } from '@angular/core';
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
    private pinpadService: Link2500PinpadService
  ){}
  private sub!: Subscription
  private sub2!: Subscription
  @ViewChildren(OptionButtonComponent) buttons !: QueryList<OptionButtonComponent>
  
  ngAfterViewInit(): void {
    //  this.sub = this.pinpadService.pinInput$.subscribe(value =>{
    //   if (value.includes('SELECT')){
    //     console.log("selecting this route: ")
    //   }
    // })
  }
  



  ngOnDestroy() {
    //when the main menu is done it will reset everything
    this.pinpadService.reset();
    // this.sub.unsubscribe();  // cleanup when screen changes
  }

}
