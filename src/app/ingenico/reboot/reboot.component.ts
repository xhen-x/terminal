import { Component } from '@angular/core';
import { pinService } from '../pin/pin.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-reboot',
  imports: [HeaderComponent],
  templateUrl: './reboot.component.html',
  styleUrl: './reboot.component.css'
})
export class RebootComponent {
  private reboot_progress:any
  constructor(private pinServ: pinService){}
  reboot_time(){
    return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  }
  ngOnInit() {
    const t = this.reboot_time()
    this.pinServ.clearHistory()
    this.reboot_progress = setTimeout(() =>{
      this.pinServ.gotoScreen("/Link-2500")
    }, t)
  }

  ngOnDestroy() {
    this.pinServ.reset()
  }


}
