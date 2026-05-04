import { Component } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentTime:string = ''
  currentDate:string = ''
  timer:any

  ngOnInit() {
    this.updateTimeDate(); // run immediately
    // update every second
    this.timer = setInterval(() => {
      this.updateTimeDate();
    }, 1000);
  }

  updateTimeDate(){
    const cur = new Date()

    this.currentTime = cur.toLocaleTimeString('en-US',{
      hour: '2-digit',
      minute: '2-digit',
      hour12: false  // 24hr format

    }).replace(':',' : ')

    this.currentDate = cur.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });

  }

  ngOnDestroy() {
    clearInterval(this.timer); // cleanup when component is destroyed
  }


}
