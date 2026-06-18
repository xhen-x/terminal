import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkWithHref } from '@angular/router';
import { OptionButtonComponent } from './option-button/option-button.component';
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
