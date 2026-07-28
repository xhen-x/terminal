import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';

import { PinpadButton } from '../pin/pin-button-model';
import { pinService } from './pin.service';
// import { __values } from 'tslib';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.css',
  standalone: true,
  imports: []
})
export class PinpadComponent implements OnInit, OnDestroy {

  @Input() buttons: PinpadButton[] = [];
  @Input() Keymode: 'number' | 'letter' = 'number';
  @Input() Backmode: 'menu' | 'input' = 'menu' 
  @Input() showFRow: boolean = false;  // ← controls F key row
  @Input() fButtons: PinpadButton[] = []; // ← F key row buttons

  @Output() buttonPressed = new EventEmitter<string>();
  @Output() valueChanged  = new EventEmitter<string>();

  

  // multi tap tracking
  private lastKey: string = '';
  private tapCount: number = 0;
  private tapTimer: any;
  constructor(private pinServ: pinService){

  }

  onButtonClick(button: PinpadButton) {
    this.Keymode = this.pinServ.getKeyMode()
    this.Backmode = this.pinServ.getBackMode()
    
    switch(button.value){
      case "F1":
        console.log("you press F1")
        break
      case "F2":
        console.log(this.pinServ.getTotalButtons())
        this.onclickup()
        break
      case "F3":
        this.onclickdown()
        break
      case "F4":
        console.log("you press F4")
        break
      case "BACK":
        if (this.Backmode === 'menu'){
          this.onPrevious()
          return
        }
        console.log("input mode")
        break
      case "CANCEL":
        if (this.Backmode === 'menu'){
          this.onPrevious()
          return
        }
          
        console.log("input mode")
        break
      default:
        
        if (this.Keymode === 'number' || !button.letters?.length) {
          this.pinServ.addNumber(button.value)
          console.log("pinpad component: ", this.pinServ.getValue())
          clearTimeout(this.tapTimer)
          this.tapTimer = setTimeout(()=>{
            this.onClear()
          },1500)
          return;
        }
        this.handleMultiTap(button);
        break
    }

    
    
  }

  handleMultiTap(button: PinpadButton) {
    clearTimeout(this.tapTimer);

    if (this.lastKey === button.value) {
      this.tapCount = (this.tapCount + 1) % (button.letters!.length + 1);
    } else {
      if (this.lastKey) this.lockInLetter();
      this.tapCount = 0;
      this.lastKey = button.value;
    }

    const currentChar = this.tapCount === 0
      ? button.value
      : button.letters![this.tapCount - 1];
    console.log(currentChar)
    this.valueChanged.emit(currentChar);

    this.tapTimer = setTimeout(() => {
      this.lockInLetter();
      
    }, 1000);
  }

  lockInLetter() {
    clearTimeout(this.tapTimer);
    const button = this.buttons.find(b => b.value === this.lastKey);
    if (!button) return;

    const currentChar = this.tapCount === 0
      ? button.value
      : button.letters![this.tapCount - 1];

    this.buttonPressed.emit(currentChar);
    this.lastKey  = '';
    this.tapCount = 0;
  }

  onClear() {
    this.pinServ.clear();
  }
  onClearHistory(){
    this.pinServ.clearHistory();
  }
  onBackspace() {
    this.pinServ.backspace();
  }
  onclickup(){
    this.pinServ.moveUp();
  }
  onclickdown(){
    this.pinServ.moveDown();
  }
  onPrevious(){
    this.pinServ.previousPage()
  }

  //dragging event
  isDragging = false;
  dragStart: PinpadButton | null = null;

  //desktop version
  onDragStart(button: PinpadButton, event: MouseEvent) {
    // only start drag on BACK button
    if (button.value !== 'BACK') return;
    
    this.isDragging = true;
    this.dragStart  = button;
  }

  onDragEnter(button: PinpadButton) {
    if (!this.isDragging) return;

    // only trigger if dragging onto # button
    if (button.row === 4 && button.col === 3 && this.dragStart?.value === 'BACK') {
      this.handleBackToHash();
    }
  }

  onDragEnd() {
    this.isDragging = false;
    this.dragStart  = null;
  }

  // --- TOUCH EVENTS (mobile) ---
  onTouchStart(button: PinpadButton, event: TouchEvent) {
    if (button.value !== 'BACK') return;
    this.isDragging = true;
    this.dragStart  = button;
  }

  onTouchMove(button:PinpadButton, event: TouchEvent) {
    if (!this.isDragging) return;

    const touch   = event.touches[0];

  // get element under the finger
    const element = document.elementFromPoint(
      touch.clientX, 
      touch.clientY
    );

  // check if finger is over a button
    const btnElement = element?.closest('.pinpad-btn');
    if (!btnElement) return;

  // finding the exact button that is going to reset
    const buttonrow = btnElement.getAttribute("button-row")
    const buttoncol = btnElement.getAttribute("button-col")
    if (buttonrow === "4" && buttoncol === "3" && this.dragStart?.value === 'BACK') {
      this.handleBackToHash();
    }
  }


  handleBackToHash() {
    this.isDragging = false;
    this.dragStart  = null;
    this.pinServ.gotoScreen('/Link-2500/reboot');
  }

  
  ngOnInit() {}

  ngOnDestroy() {
    clearTimeout(this.tapTimer);
  }
}