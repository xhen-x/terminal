import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '@header/header.component';
import { OptionButtonComponent } from "@option-button/option-button.component";

@Component({
  selector: 'app-wi-fi',
  imports: [HeaderComponent, OptionButtonComponent],
  templateUrl: './wi-fi.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './wi-fi.component.css'
})
export class WiFiComponent {

}
