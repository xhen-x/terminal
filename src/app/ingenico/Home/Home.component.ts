import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { pinService } from '../pin/pin.service';
import { PinpadComponent } from '../pin/pin.component';

// ../../link-2500-pinpad/link-2500-pinpad.service
@Component({
  selector: 'app-Home',
  imports: [],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css'
})
export class HomeComponent implements OnInit {
  private currentURL: string = '';
  // @Input () todo = null
  constructor(
    private pinpadService:pinService,
    private router:Router,

  ){}
  private sub!: Subscription
  
  ngOnInit(): void {
    this.pinpadService.clearHistory();
    this.pinpadService.setBackMode('menu')
    this.pinpadService.setKeyMode('number')
    
      // listens for any changes from pinpad
    console.log("this is being made on home!")
    this.currentURL = this.router.url
    // this.pinpadService.clearHistory()
    this.sub = this.pinpadService.pinInput$.subscribe(value => {
      if (value.includes('2634')){
        console.log("switching to 2634")
        this.router.navigate(['Link-2500/F-menu'])
      }
      else if (value.includes('0000')){
        console.log("switching to 0000")
      }
      else if (value.includes("0001")){
        console.log("switching to 0001")
      }
    });


    

  }

  ngOnDestroy() {
    this.pinpadService.pushToHistory(this.currentURL)
    this.pinpadService.clear()
    this.sub.unsubscribe();  // cleanup when screen changes
  }
}
