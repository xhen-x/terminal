import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { HomeComponent } from "./link-2500-screen/Home/Home.component";
import { Link2500PinpadComponent } from "./link-2500-pinpad/link-2500-pinpad.component"
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-link-2500',
  imports: [Link2500PinpadComponent, RouterOutlet],
  templateUrl: './link-2500.component.html',
  styleUrl: './link-2500.component.css'
})
export class Link2500Component implements OnInit,AfterViewInit{
// try to find teh scale at which the picture grew by for example if the height of the pic is 10 and it went up to 100 the scale would be 10 which i can use to multiple the screen with
  
  // @ViewChild('linkImg') linkImg!: ElementRef;
  // @ViewChild('linkScreen', {read: ElementRef}) linkScreen!: ElementRef;
  // @ViewChild('main') main!: ElementRef;
  // @ViewChild('screenArea') screenArea!: ElementRef;
  

  isLoaded = false
  // DefaultScreenAreaTop   : number = 272 // 272 px
  // DefaultScreenAreaTop:

  
  ngAfterViewInit(): void {
    console.log('DOM view is fully ready in link 2500.');
  }

  ngOnInit() {
    
    console.log('link 2500 initilizing');
    
  }

  onimgLoad(){ // this will flag the html to know that the img has been loaded
    this.isLoaded = true
  }

}
