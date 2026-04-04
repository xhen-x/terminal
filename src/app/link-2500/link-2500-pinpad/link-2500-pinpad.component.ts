import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-link-2500-pinpad',
  imports: [],
  templateUrl: './link-2500-pinpad.component.html',
  styleUrl: './link-2500-pinpad.component.css'
})
export class Link2500PinpadComponent {
  @ViewChild("numButton") numButton !: ElementRef

  ButtonInput : String = ""
  private clearTimer: any
  onClick(value: string){
    this.ButtonInput = this.ButtonInput + value
    console.log(this.ButtonInput)

    if (this.ButtonInput.includes('2634')) {
      console.log("this worked")
      this.ButtonInput = ""
    }

    clearTimeout(this.clearTimer)

  // start a fresh timer
  this.clearTimer = setTimeout(() => {
    this.ButtonInput = ""
    console.log('input cleared!')
  }, 2000)
  }

  

}
