import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link2500PinpadService } from '../link-2500/link-2500-pinpad/link-2500-pinpad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-option-button',
  imports: [],
  templateUrl: './option-button.component.html',
  styleUrl: './option-button.component.css'
})
export class OptionButtonComponent implements OnInit,OnDestroy{
  constructor( 
    private router:Router,
    private pinpadService: Link2500PinpadService,
  ){}

  private sub!: Subscription
  private sub2!: Subscription
  isHighlighted:boolean = false
  index:number = 0
  @Input() label: string ='';
  @Input() route: string ='';
  @Input() bgcolor: string='';

  
  ngOnInit(): void {
    this.index = this.pinpadService.registerButton()
    this.sub = this.pinpadService.selectedIndex$.subscribe(value =>{
      console.log(value, this.index)
      if (value == this.index){
        this.isHighlighted = true
      }else{
        this.isHighlighted = false
      }
    })
    this.sub2 = this.pinpadService.pinInput$.subscribe(value =>{
      if(this.isHighlighted && value.includes("SELECT")){
        console.log(this.isHighlighted, " ", this.route)
        this.router.navigate([this.route])
      }
    })

  }
  
  onClick(){
    console.log("you click on this index: ", this.index)
    if (this.route){
      this.router.navigate([this.route])
    }
  }


  ngOnDestroy(): void {
   this.pinpadService.unregisterButton();
   this.sub.unsubscribe();
   this.sub2.unsubscribe();
  }
}

// my thought is to make an 
