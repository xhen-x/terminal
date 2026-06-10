import { Routes } from '@angular/router';
import { HomeComponent } from './link-2500-screen/Home/Home.component';
import { FMenuComponent } from './link-2500-screen/F-menu/f-menu.component';

//this is going to be the master routes list
export const Link_2500_Routes: Routes = [
    {
        path:'', component:HomeComponent, pathMatch:"full",
        
    },
    { // this will go to the f-menu routes and inside of f-menu routes has the component of f-menu which will load, (reason this will help me not add more routes-outlet)
        path: 'F-menu',
        loadChildren: () => import('./link-2500-screen/F-menu/F-menu.routes')
                        .then(m => m.Main_Menu_Routes)  // ← will let f-menu routes to take control
    },  // this will allow me to keep the url but not keep the main cluter up
];