import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { HomeComponent } from '../ingenico/Home/Home.component';
// import { Link2500PinpadComponent } from "../ingenico/Pinpad/Pinpad.component"
import { RouterOutlet } from "@angular/router";
// import { Link2500PinpadService } from '../ingenico/Pinpad/Pinpad.service';
import { PinpadComponent } from "../ingenico/pin/pin.component";
import { PinpadButton } from '../ingenico/pin/pin-button-model';
import { pinService } from '../ingenico/pin/pin.service';

@Component({
  selector: 'app-link-2500',
  imports: [PinpadComponent,RouterOutlet,],
  templateUrl: './link-2500.component.html',
  styleUrl: './link-2500.component.css'
})
export class Link2500Component implements OnInit,AfterViewInit{
  @ViewChild(PinpadComponent) pinpad!: PinpadComponent;
  isLoaded = false

  keyMode: 'number' | 'letter' = 'number';
  backMode: 'menu' | 'input' = 'menu';

  // link-2500-pinpad.component.ts
  buttons: PinpadButton[] = [
    // row 1
    { label:'1', value:'1', row:1, col:1, type:'number', letters:[]  },
    { label:'2', value:'2', row:1, col:2, type:'number', letters:['a','b','c'] },
    { label:'3', value:'3', row:1, col:3, type:'number', letters:['d','e','f'] },
    { label:'F', value:'F', row:1, col:4, type:'action' },
    // row 2
    { label:'4', value:'4', row:2, col:1, type:'number', letters:['g','h','i'] },
    { label:'5', value:'5', row:2, col:2, type:'number', letters:['j','k','l'] },
    { label:'6', value:'6', row:2, col:3, type:'number', letters:['m','n','o'] },
    { label:'X', value:'CANCEL', row:2, col:4, type:'action' },
    // row 3
    { label:'7', value:'7', row:3, col:1, type:'number', letters:['p','q','r','s'] },
    { label:'8', value:'8', row:3, col:2, type:'number', letters:['t','u','v'] },
    { label:'9', value:'9', row:3, col:3, type:'number', letters:['w','x','y','z'] },
    { label:'<', value:'BACK', row:3, col:4, type:'action'},
    // row 4
    { label:'+', value:'+', row:4, col:1, type:'special' },
    { label:'0', value:'0', row:4, col:2, type:'number', letters:[' '] },
    { label:'-', value:'-', row:4, col:3, type:'special' },
    { label:'O', value:'SELECT', row:4, col:4, type:'action'},
  ];

fButtons: PinpadButton[] = [
  { label:'F1', value:'F1', row:1, col:1},
  { label:'F2', value:'F2', row:1, col:2 },
  { label:'F3', value:'F3', row:1, col:3 },
  { label:'F4', value:'F4', row:1, col:4 },
];


  

  ngAfterViewInit(): void {
    console.log('DOM view is fully ready in link 2500.');
  }

  ngOnInit() {
    this.pinpad.onClearHistory()
    console.log('link 2500 initilizing');
    
    
  }



  onimgLoad(){ // this will flag the html to know that the img has been loaded
    this.isLoaded = true
  }

}
