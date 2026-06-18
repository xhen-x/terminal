import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class scrollbarService{


    applyScrollstyle(el:HTMLElement){
    const screen = el.querySelector('.scrollversion1');
    if (!screen) {
      console.log("nothing to match")
      return;
    }
    if (screen.className.includes('scrollversion1')){
      const width = screen.getBoundingClientRect().width;
      const scrollbarSize = width * 0.047; // 4% like your 4cqw
      const paddingSize = width * 0.015; // 1% like your 1cqw
      const marginSize = width * 0.01;
      const styleId = 'scrollbar-styles';
      console.log("in main this is scrollbar width: ", width)
      let style = document.getElementById(styleId);
      if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
      }

      style.innerHTML = `
        .main-manue-screen::-webkit-scrollbar {
          width: ${scrollbarSize}px !important;
        }
        .main-manue-screen::-webkit-scrollbar-thumb {
          background: rgba(255,255,255);
          border-radius: 999px;
          border-left: ${paddingSize}px solid transparent;
          border-right: ${paddingSize}px solid transparent;
          background-clip: content-box;
        }
        .main-manue-screen::-webkit-scrollbar-track {
          margin-bottom: ${marginSize}px;
        }
      `;
    }
  
  }

  removeScrollstyle(){
    const style = document.getElementById('scrollbar-styles')
    if (style){
      style.remove()
    }
  }
}