import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinpadButton } from '../pin/pin-button-model';
import { pinService } from './pin.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.css',
  standalone: true,
  imports: [CommonModule]
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

  
  ngOnInit() {}

  ngOnDestroy() {
    clearTimeout(this.tapTimer);
  }
}