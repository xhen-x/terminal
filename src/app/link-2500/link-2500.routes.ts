import { Routes } from '@angular/router';
import { HomeComponent } from './link-2500-screen/Home/Home.component';
import { FMenuComponent } from './link-2500-screen/F-menu/F-menu.component';

//this is going to be the master routes list
export const Home_Routes: Routes = [
    {
        path:'', component:HomeComponent, pathMatch:"full",
        
    },
    { 
        path: 'F-menu',
        loadChildren: () => import('./link-2500-screen/F-menu/F-menu.routes') // this will load the link 2500 routes when they enter link 2500
                        .then(m => m.Main_Menu_Routes)  // ← will let link-2500 routes to take control
    },  
];