import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { OptionButtonComponent } from '../../../../option-button/option-button.component';

@Component({
  selector: 'app-main-menu',
  imports: [HeaderComponent,OptionButtonComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
