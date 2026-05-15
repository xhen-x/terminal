import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class Link2500PinpadService {
    private PinInput = new BehaviorSubject<string>('') // PinInput is read and write
    pinInput$ = this.PinInput.asObservable(); // this is for the component to be able to read the input but not be able to edit (READ ONLY)

    private ButtonCount = 0
    addNumber(num: string) {
        const current = this.PinInput.getValue();
        this.PinInput.next(current + num);  // adds number to existing input
    }

    clear() {
        this.PinInput.next('');  // clears everything
    }

    backspace() {
        const current = this.PinInput.getValue();
        this.PinInput.next(current.slice(0, -1));  // removes last number
    }

    getValue():string {
        return this.PinInput.getValue() // get the current value
    }


    private selectedIndex = new BehaviorSubject<number>(0)
    selectedIndex$ = this.selectedIndex.asObservable();

    private totalButtons = new BehaviorSubject<number>(0);
    // from the screen that is hosting the button you would need to set it
    setTotalButtons(total: number) {
        this.totalButtons.next(total);
    }
    registerButton():number{
        const index = this.ButtonCount
        this.ButtonCount++
        this.setTotalButtons(this.ButtonCount)
        return index
    }
    unregisterButton(){
        this.ButtonCount--
        this.setTotalButtons(this.ButtonCount)
    }
    reset(){
        this.ButtonCount=0
        this.selectedIndex.next(0)
    }

    moveUp(){
        const current = this.selectedIndex.getValue()
        if (current <= 0){
            this.selectedIndex.next(this.totalButtons.getValue() - 1)
        }else{
            this.selectedIndex.next(current - 1)
        }
        

    }
    moveDown(){
        const current = this.selectedIndex.getValue()
        if (current >= this.totalButtons.getValue() - 1){
            this.selectedIndex.next(0)
        }else{
            this.selectedIndex.next(current + 1)
        }
    }


}
