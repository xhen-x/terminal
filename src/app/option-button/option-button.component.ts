import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
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
    private el: ElementRef // referencing the button itself 
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
        // might need to add a timer if it doesn't scroll due to it not rendering
        // this is to automatically scroll to
        setTimeout(() => {
          this.scrollIntoViewIfNeeded() // ← called when highlighted
        }, 0)
      }else{
        this.isHighlighted = false
        
      }
    })
    this.sub2 = this.pinpadService.pinInput$.subscribe(value =>{
      if(this.isHighlighted && value.includes("SELECT")){
        this.router.navigate([this.route])
      }
    })

  }

    scrollIntoViewIfNeeded() {
      const el        = this.el.nativeElement
      const container = el.closest('.main-manue-screen') // to find the container of main page
      if (!container) return

      const total  = this.pinpadService.getTotalButtons()
      const isLast = this.index === total - 1  // ← is this the last button?
      const isfirst = this.index === 0
      if (isLast) {
        // last item highlight 
        el.scrollIntoView({ behavior: 'instant', block: 'nearest' })
        return // this is to make it scroll to the next aka ignore the next if statement
      }
      if (isfirst){
        el.scrollIntoView({ behavior: 'instant', block: 'nearest' })
        return
      }

      // scroll to show NEXT item peeking at bottom and also showing the current items as well
      const nextEl = el.nextElementSibling
      if (nextEl) {
        el.scrollIntoView({ behavior: 'instant', block: 'nearest' })
        nextEl.scrollIntoView({ behavior: 'instant', block: 'nearest' })
      }
  }

  
  
  // i don't need this but incase i'll leave it her if i do
  // onClick(){
  //   if (this.route){
  //     this.router.navigate([this.route])
  //   }
  // }


  ngOnDestroy(): void {
   this.pinpadService.unregisterButton();
   this.sub.unsubscribe();
   this.sub2.unsubscribe();
  }
}

// my thought is to make an 
