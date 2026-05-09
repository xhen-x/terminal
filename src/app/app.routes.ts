import { Routes } from '@angular/router';
import { Link2500Component } from './link-2500/link-2500.component';
import { OptionButtonComponent } from './option-button/option-button.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {// essentially this will make it the url Link-2500 and what ever the child is it's going to be link-2500 / bla
        path: 'Link-2500', 
        component: Link2500Component,
        loadChildren: () => import('./link-2500/link-2500.routes') // this will load the link 2500 routes when they enter link 2500
                        .then(m => m.Home_Routes)  // ← will let link-2500 routes to take control
    },
    {
        path:'option',
        component: OptionButtonComponent,pathMatch:"full"
    },
    {
        path:'header',
        component: HeaderComponent,pathMatch:"full"
    }
];
