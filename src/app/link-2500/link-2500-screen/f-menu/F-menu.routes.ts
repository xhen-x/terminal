import { Routes } from '@angular/router';
import { FMenuComponent } from './F-menu.component';

export const Main_Menu_Routes: Routes = [
    {
        path:'', component:FMenuComponent, pathMatch:"full",
        
    },
];