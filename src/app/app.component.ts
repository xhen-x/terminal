import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkWithHref } from '@angular/router';
import { OptionButtonComponent } from './ingenico/option-button/option-button.component';
import { Link2500PinpadService } from './link-2500/link-2500-pinpad/link-2500-pinpad.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
  }

  
  

  
}
