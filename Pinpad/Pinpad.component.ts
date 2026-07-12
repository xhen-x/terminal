import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Link2500PinpadService } from './Pinpad.service';

@Component({
  selector: 'app-Pinpad',
  imports: [],
  templateUrl: './Pinpad.component.html',
  styleUrl: './Pinpad.component.css'
})
export class Link2500PinpadComponent {

  @Input() showFKey: boolean = false;

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
  goBack(){
    this.pinpadService.back()
  }

}
