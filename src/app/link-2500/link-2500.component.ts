import { AfterViewInit, Component, ElementRef, HostListener, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { Link2500ScreenComponent } from "./link-2500-screen/link-2500-screen.component";
import { Link2500PinpadComponent } from "./link-2500-pinpad/link-2500-pinpad.component"

@Component({
  selector: 'app-link-2500',
  imports: [Link2500ScreenComponent, Link2500PinpadComponent],
  templateUrl: './link-2500.component.html',
  styleUrl: './link-2500.component.css'
})
export class Link2500Component implements AfterViewInit{
// try to find teh scale at which the picture grew by for example if the height of the pic is 10 and it went up to 100 the scale would be 10 which i can use to multiple the screen with
  
  @ViewChild('linkImg') linkImg!: ElementRef;
  @ViewChild('linkScreen', {read: ElementRef}) linkScreen!: ElementRef;
  @ViewChild('main') main!: ElementRef;
  // @ViewChild('screenArea') screenArea!: ElementRef;

  DefaultLinkScreenWidth  !: number
  DefaultLinkScreenHeight !: number
  DefaultLinkScreenLeft   !: number
  DefaultLinkScreenTop    !: number

  // DefaultScreenAreaTop   : number = 272 // 272 px
  // DefaultScreenAreaTop:

  
  ngAfterViewInit(): void {
    this.DefaultLinkScreenWidth  = this.linkScreen.nativeElement.offsetWidth
    this.DefaultLinkScreenHeight = this.linkScreen.nativeElement.offsetHeight
    this.DefaultLinkScreenLeft   = this.linkScreen.nativeElement.getBoundingClientRect().left
    this.DefaultLinkScreenTop    = this.linkScreen.nativeElement.getBoundingClientRect().top

    // this.getLinkScreenLeft()
    // this.getLinkScreenTop()

    // const img = this.linkImg.nativeElement;
    // if (img.complete) {
    //   this.onImageLoad(); 
    // } else {
    //   img.addEventListener('load', () => this.onImageLoad()); 
    // }

    
    // this.getLinkScreenLeft()
    // this.getLinkScreenTop()

    // console.log(this.getLinkScreenLeft())
    // console.log(this.getLinkScreenTop())

    // console.log(this.getLink2500Width())
    // console.log(this.getLink2500Height())

    // console.log(this.linkImg.nativeElement.offsetHeight+ " this is the width: " + this.linkImg.nativeElement.offsetWidth)
    // console.log(this.getMainWidthHalf())
    

  }
  // screen size
  // width: 176px;    /* width relative to image width */
  // height: 135px;   /* height relative to image height */

  //og images size:
  // min-height: 488px;
  // min-width: 265px;
  onImageLoad() {
    const width  = this.linkImg.nativeElement.getBoundingClientRect().width; // to get the og width
    const height = this.linkImg.nativeElement.getBoundingClientRect().height;// to get the og height
    console.log('Image Width:', width);
    console.log('Image Height:', height);

    // ✅ now safe to use dimensions for other things
    // this.linkScreen.nativeElement.style.width = width + 'px';
  }

  getTest():void{
    console.log("this is main height and width value ", this.getMainHeight(), " ", this.getMainWidth())
    console.log("this is LinkTerminal height and width value ", this.getLink2500Height(), " ", this.getLink2500Width())
    console.log("this is link screen height and width",this.linkScreen.nativeElement.offsetHeight, " ", this.linkScreen.nativeElement.offsetWidth)
    console.log("this is link top and left",this.linkImg.nativeElement.getBoundingClientRect().top, " ", this.linkImg.nativeElement.getBoundingClientRect().left)
    console.log("this is link screen top and left",this.linkScreen.nativeElement.getBoundingClientRect().top, " ", this.linkScreen.nativeElement.getBoundingClientRect().left)
    return
  }
  getMainWidth():number{
    return this.main.nativeElement.getBoundingClientRect().width
  }
  getMainHeight():number{
    return this.main.nativeElement.getBoundingClientRect().height
  }
  getMainWidthHalf():number{
    return (this.getMainWidth() / 2)
  }
  getMainHeightHalf():number{
    return (this.getMainHeight() / 2)
  }

  getLink2500Width() :number{
    console.log("this is main width", this.getMainWidth());
    return this.linkImg.nativeElement.offsetWidth
  }
  getLink2500Height() :number{
    console.log("this is main height", this.getMainHeight());
    return this.linkImg.nativeElement.offsetHeight
  }
  getLinkScreenTop():string{
    return this.linkScreen.nativeElement.style.top = Math.round(this.linkImg.nativeElement.getBoundingClientRect().top) + this.DefaultLinkScreenTop + 'px'
    // return this.linkScreen.nativeElement.style.top = Math.round(this.main.nativeElement.getBoundingClientRect().height)/2 - this.DefaultLinkScreenTop + 'px'
  }
  getLinkScreenLeft():string{
    return this.linkScreen.nativeElement.style.left = Math.round(this.linkImg.nativeElement.getBoundingClientRect().left) + this.DefaultLinkScreenLeft + 'px'
    // return this.linkScreen.nativeElement.style.left = Math.round(this.getMainWidthHalf()) -this.DefaultLinkScreenLeft  + 'px'
  }
  @HostListener('window:resize')
  onResize() {
    console.log(this.getTest())
    // this.getLinkScreenLeft()
    // this.getLinkScreenTop()
    // console.log(this.getLinkScreenLeft())
    // console.log(this.getLinkScreenTop())
  }


}
