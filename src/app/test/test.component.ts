import { Component } from '@angular/core';
import { PinpadComponent } from "../ingenico/pin/pin.component";
import { PinpadButton } from '../ingenico/pin/pin-button-model';

@Component({
  selector: 'app-test',
  imports: [PinpadComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
keyMode: 'number' | 'letter' = 'letter';
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
onButtonPressed(value: string) {
    console.log('button pressed:', value);
    switch(value) {
      case 'CANCEL': break;
      case 'BACK':   break;
      case 'SELECT': break;
      default:       break;
    }
  }

}


// like
// i like how it is alot more customizable
// might need to focus on reading the code
// then see how i can adjust it
// also like how i can change the mode
//dislike
// the issue is that i need to figure out how to config some stuff
// additionally i need to see what the css does
// not to sure if i need onbutton press
