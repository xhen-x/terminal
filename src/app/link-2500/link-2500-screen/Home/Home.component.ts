import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet, Router } from "@angular/router";
import { Link2500PinpadService } from '../../link-2500-pinpad/link-2500-pinpad.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-Home',
  imports: [],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css'
})
export class HomeComponent implements OnInit {
  // @Input () todo = null

  constructor(
    private pinpadService:Link2500PinpadService,
    private router:Router

  ){}
  private sub!: Subscription

  ngOnInit(): void {
      // listens for any changes from pinpad
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
    this.sub.unsubscribe();  // cleanup when screen changes
  }
}
