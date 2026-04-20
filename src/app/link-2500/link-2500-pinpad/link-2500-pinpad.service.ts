import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class Link2500PinpadService {
    private PinInput = new BehaviorSubject<string>('') // PinInput is read and write
    pinInput$ = this.PinInput.asObservable(); // this is for the component to be able to read the input but not be able to edit (READ ONLY)

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

}
