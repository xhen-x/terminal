import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-button',
  imports: [],
  templateUrl: './option-button.component.html',
  styleUrl: './option-button.component.css'
})
export class OptionButtonComponent {
  constructor( private router:Router ){}
  
  @Input() label: string ='';
  @Input() route: string ='';
  @Input() bgcolor: string='';

  
  onClick(){
    console.log("in button ", this.route)
    if (this.route){
      this.router.navigate([this.route])
    }
  }
}
