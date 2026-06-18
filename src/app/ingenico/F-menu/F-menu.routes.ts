import { Routes } from '@angular/router';
import { FMenuComponent } from './f-menu.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';

export const F_Menu_Routes: Routes = [
    {
        path:'', component:FMenuComponent, pathMatch:"full",
        
    },
    {
        path:'Main-Menu',
        loadChildren: () => import('../main-menu/main-menu.routes')
                            .then(m => m.Main_Menu_Routes)
    },
];


//  { // this will go to the f-menu routes and inside of f-menu routes has the component of f-menu which will load, (reason this will help me not add more routes-outlet)
//         path: 'F-menu',
//         loadChildren: () => import('./link-2500-screen/F-menu/F-menu.routes')
//                         .then(m => m.F_Menu_Routes)  // ← will let f-menu routes to take control
//     }