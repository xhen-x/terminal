import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Link2500PinpadService } from './link-2500-pinpad.service';

@Component({
  selector: 'app-link-2500-pinpad',
  imports: [],
  templateUrl: './link-2500-pinpad.component.html',
  styleUrl: './link-2500-pinpad.component.css'
})
export class Link2500PinpadComponent {

  constructor(private pinpadService : Link2500PinpadService){

  }

  @ViewChild("numButton") numButton !: ElementRef
  private clearTimer: any

  onClick(value: string){
    this.pinpadService.addNumber(value);
    console.log("pinpad component: ", this.pinpadService.getValue())
    clearTimeout(this.clearTimer)

    this.clearTimer = setTimeout(()=>{
      this.onClear()
    },1500)
  }

  onClear() {
    this.pinpadService.clear();
  }

  onBackspace() {
    this.pinpadService.backspace();
  }

  onclickup(){
    this.pinpadService.moveUp();
  }
  onclickdown(){
    this.pinpadService.moveDown();
  }
  onSelect(){
    this.pinpadService.select();
    this.clearTimer = setTimeout(()=>{
      this.onClear()
    },500)
  }
  

}
