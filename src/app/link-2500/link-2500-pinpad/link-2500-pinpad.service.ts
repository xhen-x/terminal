import { inject, Injectable } from '@angular/core';
import { ActivatedRoute,NavigationEnd,NavigationStart,Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { Location } from '@angular/common';
@Injectable({ providedIn: 'root' })
export class Link2500PinpadService {
    private PinInput = new BehaviorSubject<string>('') // PinInput is read and write
    pinInput$ = this.PinInput.asObservable(); // this is for the component to be able to read the input but not be able to edit (READ ONLY)
    private ButtonCount = 0
    private routeHistory:string[] = []
    private isGoingBack = false;
    constructor(
        private route: Router,
        private location:Location
    ){

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
            this.routeHistory.push(tempURL)
            
            
            
        });
        console.log('initializing pinpad service');


    }
    addNumber(num: string) {
        const current = this.PinInput.getValue();
        this.PinInput.next(current + num);  // adds number to existing input
    }

    clear() {
        this.PinInput.next('');  // clears everything
    }

    backspace() {
        const current = this.PinInput.getValue();
        this.PinInput.next(current.slice(0, -1));  // removes last number
    }
    select(){
        this.PinInput.next("SELECT")
    }

    getValue():string {
        return this.PinInput.getValue() // get the current value
    }

    pushToHistory(url:string){
        if (this.isGoingBack) {
            this.isGoingBack = false;  // ← reset flag
            return;                    // ← skip push when going back
        }

        if (this.routeHistory.at(-1) === url) return
        this.routeHistory.push(url)
    }
    clearHistory(){
        this.routeHistory = []
    }
    back(){
        
        console.log(this.routeHistory)
        if (this.routeHistory.length === 0){
            return
        }
        const previousRoute = this.routeHistory.pop();
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


}
