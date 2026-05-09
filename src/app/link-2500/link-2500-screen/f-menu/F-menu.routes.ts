import { Routes } from '@angular/router';
import { FMenuComponent } from './f-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

export const Main_Menu_Routes: Routes = [
    {
        path:'', component:FMenuComponent, pathMatch:"full",
        
    },
    {
        path:'Main-Menu',component:MainMenuComponent,
    },
];