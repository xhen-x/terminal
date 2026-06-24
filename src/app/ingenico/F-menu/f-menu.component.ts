import { Component, OnInit } from '@angular/core';
import { Link2500PinpadService } from '../../link-2500/link-2500-pinpad/link-2500-pinpad.service';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-F-menu',
  imports: [HeaderComponent],
  templateUrl: './f-menu.component.html',
  styleUrl: './f-menu.component.css'
})
export class FMenuComponent implements OnInit{
  private URL:string = ""
  constructor(
    private pinpadService: Link2500PinpadService,
    private router: Router
  ){}
  private sub!: Subscription
  ngOnInit(): void {
    this.URL = this.router.url
    console.log("this is being made on f-menu!")
    this.sub = this.pinpadService.pinInput$.subscribe(value =>{
      if (value.includes('F')){
        this.router.navigate(['Link-2500/F-menu/Main-Menu'])
      }
    })
  }

  ngOnDestroy() {
    this.pinpadService.clear()
    this.pinpadService.pushToHistory(this.URL)
    this.sub.unsubscribe();  // cleanup when screen changes
    
  }
}
