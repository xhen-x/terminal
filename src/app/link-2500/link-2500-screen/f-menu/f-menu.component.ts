import { Component, OnInit } from '@angular/core';
import { Link2500PinpadService } from '../../link-2500-pinpad/link-2500-pinpad.service';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-F-menu',
  imports: [RouterOutlet],
  templateUrl: './F-menu.component.html',
  styleUrl: './F-menu.component.css'
})
export class FMenuComponent implements OnInit{

  constructor(
    private pinpadService: Link2500PinpadService,
    private router: Router
  ){}
  private sub!: Subscription
  ngOnInit(): void {
    this.sub = this.pinpadService.pinInput$.subscribe(value =>{
      if (value.includes('F')){
        this.router.navigate(['Link-2500/F-menu/Main-Menu'])
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();  // cleanup when screen changes
  }
}
