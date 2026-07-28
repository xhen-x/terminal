import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { pinService } from '../pin/pin.service';

@Component({
  selector: 'app-F-menu',
  imports: [HeaderComponent],
  templateUrl: './f-menu.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './f-menu.component.css'
})
export class FMenuComponent implements OnInit{
  private URL:string = ""
  constructor(
    private pinpadService: pinService,
    private router: Router
  ){}
  private sub!: Subscription
  ngOnInit(): void {
    this.pinpadService.setBackMode('menu')
    this.pinpadService.setKeyMode('number')


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
