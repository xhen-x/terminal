import { Routes } from '@angular/router';
import { Link2500Component } from './link-2500/link-2500.component';
import { ControlPanelComponent } from './ingenico/main-menu/screens/control-panel/control-panel.component';
// import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {// essentially this will make it the url Link-2500 and what ever the child is it's going to be link-2500 / bla
        path: 'Link-2500', 
        component: Link2500Component,
        loadChildren: () => import('./link-2500/link-2500.routes') // this will load the link 2500 routes when they enter link 2500
                        .then(m => m.Link_2500_Routes)  // this will grab the file and essently letting it take over
    },
    
// example
    // {
    //     path:'header',
    //     component: HeaderComponent,pathMatch:"full"
    // }
];
