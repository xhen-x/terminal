import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Link2500Component } from "./link-2500/link-2500.component";
import {Link2500ScreenComponent} from "./link-2500/link-2500-screen/link-2500-screen.component"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Link2500Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

  @ViewChild('Link2500Component') Link2500!: Link2500Component; // this is me looking for the main tag on app HTML

  title = 'TerminalApps';
  ngAfterViewInit(): void {
  }


  
  
  

  

  // width: number;

  
}
