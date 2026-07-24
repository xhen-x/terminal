import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { pinService } from '../pin/pin.service';

@Component({
  selector: 'app-option-button',
  imports: [],
  templateUrl: './option-button.component.html',
  styleUrl: './option-button.component.css'
})
export class OptionButtonComponent implements OnInit,OnDestroy{
  constructor( 
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private pinpadService: pinService,
    private el: ElementRef // referencing the button itself 
  ){}

  private sub!: Subscription
  private sub2!: Subscription
  isHighlighted:boolean = false
  index:number = 0
  @Input() label: string ='';
  @Input() route: string ='';

  
  ngOnInit(): void {
    this.index = this.pinpadService.registerButton()
    this.sub = this.pinpadService.selectedIndex$.subscribe(value =>{
      console.log(value, this.index)
      if (value == this.index){
        this.isHighlighted = true
        console.log("this is what being selected :", this.index)
        // might need to add a timer if it doesn't scroll due to it not rendering
        // this is to automatically scroll to

        // need to take a look at this might need to make a pipe to filter out the router event and scroll when it is done making all of the buttons
        setTimeout(() => {// without the time it will call it and highlight the button instantly but in IRL terminal there should be an extra button at the bottom
          this.scrollIntoViewIfNeeded() // ← called when highlighted
        }, 100)
      }else{
        this.isHighlighted = false
        
      }
    })
    this.sub2 = this.pinpadService.pinInput$.subscribe(value =>{
      if(this.isHighlighted && value.includes("SELECT")){
        this.navigate()
        this.pinpadService.clear()
      }
    })

  }

    scrollIntoViewIfNeeded() {
      const el        = this.el.nativeElement
      const container = el.closest('.main-menu-screen') // to find the container of main page
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
      const prevEl = el.previousElementSibling
      if (nextEl) {
        prevEl.scrollIntoView({ behavior: 'instant', block: 'nearest' })
        el.scrollIntoView({ behavior: 'instant', block: 'nearest' })
        nextEl.scrollIntoView({ behavior: 'instant', block: 'nearest' })
        return
      }
  }

  navigate(){
    this.router.navigate([this.route],{
      relativeTo: this.activatedRoute
    })
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
