import { inject, Injectable } from '@angular/core';
import {NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter} from 'rxjs';
import { Location } from '@angular/common';
@Injectable({ providedIn: 'root' })

export class pinService{

    private PinInput = new BehaviorSubject<string>('') // PinInput is read and write
    private keymode = new BehaviorSubject<'number' | 'letter'>('number');
    private backmode = new BehaviorSubject<'menu' | 'input'>('menu');
    pinInput$ = this.PinInput.asObservable(); // this is for the component to be able to read the input but not be able to edit (READ ONLY)
    private ButtonCount = 0
    private routeHistory:(string|number)[][] = []
    private isGoingBack = false;
    private pendingIndex: number|null = null
    constructor(
        private route: Router,
        private location:Location
    ){
        // when going back to the previous page it will keep it highlightes
        this.route.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(()=>{
            if (this.pendingIndex !== null){
                this.selectedIndex.next(this.pendingIndex)
                this.pendingIndex = null
            }
        })
        console.log('pinpad service created!')
        this.initializeService();


    
    }

    
    
    initurl:string = ""
    initializeService(){
        let tempURLstack = []
        let tempURL = ""
        this.initurl = this.route.url

        tempURLstack = this.initurl.split('/')
        tempURLstack = tempURLstack.slice(1,-1)
        tempURLstack.forEach(screen => {
            console.log(screen)
            tempURL = tempURL+"/"+screen
            if (screen === "F-menu"){
                return
            }
            this.routeHistory.push([tempURL,this.selectedIndex.value])
            
            
            
        });
        console.log(this.routeHistory)
        console.log('initializing pinpad service');

    
    }
    addNumber(num: string) {
        const current = this.PinInput.getValue();
        this.PinInput.next(current + num);  // adds number to existing input
    }
    getValue():string {
        return this.PinInput.getValue() // get the current value
    }
    clear(){
        this.PinInput.next('');  // clears everything
    }

    backspace() {
        const current = this.PinInput.getValue();
        this.PinInput.next(current.slice(0, -1));  // removes last number
    }
    select(){
        this.PinInput.next("SELECT")
    }

    //need to look into push history

    //this.isgoingback is to prevent the terminal from going in a loop....
    pushToHistory(url:string){    
        if (this.isGoingBack || url.endsWith("F-menu")) {
            this.isGoingBack = false;  // ← reset flag
            return;                    // ← skip push when going back
        }
        this.routeHistory.push([url,this.selectedIndex.value])
        console.log(this.routeHistory)
    }
    clearHistory(){
        this.routeHistory = []
    }
    previousPage(){
        
        console.log(this.routeHistory)
        if (this.routeHistory.length === 0){
            return
        }
        const previous = this.routeHistory.pop();
        if(!previous) return
        const previousRoute = previous[0] as string
        this.pendingIndex = previous[1] as number // tempary save of the previous page index
        this.isGoingBack = true;  // ← set flag BEFORE navigating
        
        this.route.navigate([previousRoute]);
        
            
        console.log(this.routeHistory)
        
    }



    private selectedIndex = new BehaviorSubject<number>(0)
    selectedIndex$ = this.selectedIndex.asObservable();

    private totalButtons = new BehaviorSubject<number>(0);
    
    setTotalButtons(total: number) {
        // this is for me to know the total amount this is also being used by registerButton
        this.totalButtons.next(total);
    }
    getTotalButtons(): number{
        return this.totalButtons.getValue();
    }
    registerButton():number{
        // when adding this to option button it will count it self
        const index = this.ButtonCount
        this.ButtonCount++
        this.setTotalButtons(this.ButtonCount)

        return index
    }
    unregisterButton(){
        //when going to anther page it will unregister the old button
        this.ButtonCount--
        this.setTotalButtons(this.ButtonCount)
    }
    reset(){
        this.ButtonCount=0
        this.selectedIndex.next(0)
        
    }
    setSelectIndex(ind: number){
        this.selectedIndex.next(ind)
        console.log("this is what index is : ", this.selectedIndex.value)
    }

    moveUp(){
        const current = this.selectedIndex.getValue()
        if (current <= 0){
            this.selectedIndex.next(this.getTotalButtons() - 1)
        }else{
            this.selectedIndex.next(current - 1)
        }
        

    }
    moveDown(){
        const current = this.selectedIndex.getValue()
        if (current >= this.getTotalButtons() - 1){
            this.selectedIndex.next(0)
        }else{
            this.selectedIndex.next(current + 1)
        }
    }

    setKeyMode(mode: 'number' | 'letter') {
        this.keymode.next(mode);
    }
    getKeyMode(): 'number' | 'letter' {
        return this.keymode.getValue();
    }
    toggleKeyMode() {
        const current = this.keymode.getValue();
        this.keymode.next(current === 'number' ? 'letter' : 'number');
    }

    
    // changing the mode for the back buttin
    setBackMode(mode: 'menu' | 'input'){
        this.backmode.next(mode);

    }
    getBackMode(): 'menu' | 'input'{
        return this.backmode.getValue();
    }
    toggleBackMode(){
        const current = this.backmode.getValue();
        this.backmode.next(current === 'menu' ? 'input' : 'menu')
    }
    gotoScreen(path:string){

        this.route.navigate([path])

    }



}


