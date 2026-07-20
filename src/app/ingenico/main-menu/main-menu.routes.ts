import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';
import { TSAComponent } from './options/tsa/tsa.component';
import { TetraAdminComponent } from './options/tetra-admin/tetra-admin.component';
import { TDAComponent } from './options/tda/tda.component';
import { S8460370201Component } from './options/s-8460370201/s-8460370201.component';
import { CAVDEVComponent } from './options/cav-dev/cav-dev.component';
import { FormMgrSrvcComponent } from './options/form-mgr-srvc/form-mgr-srvc.component';
import { WICComponent } from './options/wic/wic.component';


export const Main_Menu_Routes: Routes = [
// need to change the path to load the childern path...
    
    {
        path: '', component:MainMenuComponent, pathMatch:'full'
    },
    {
        path: 'TSA', component:TSAComponent,pathMatch:'full'
    },
    {
        path: 'Tetra-Admin',component:TetraAdminComponent, pathMatch:'full'
    },
    {
        path: 'TDA',component:TDAComponent, pathMatch:'full'
    },
    {
        path: '8460370201',component:S8460370201Component, pathMatch:'full'
    },
    {
        path: 'CAV-DEV',component:CAVDEVComponent, pathMatch:'full'
    },
    {
        path: 'Control-Panel',
        loadChildren: () => import('./options/control-panel/control-panel.routes')
                            .then(m => m.Control_Panel_Routes)
    },
    {
        path: 'FormMgrSrvc',component:FormMgrSrvcComponent, pathMatch:'full'
    },
    {
        path: 'WIC', component:WICComponent,pathMatch:'full'
    },

];
