import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';
import { Component } from '@angular/core';
import { ControlPanelComponent } from './screens/control-panel/control-panel.component';
import { TSAComponent } from './screens/tsa/tsa.component';
import { TetraAdminComponent } from './screens/tetra-admin/tetra-admin.component';
import { TDAComponent } from './screens/tda/tda.component';
import { S8460370201Component } from './screens/s-8460370201/s-8460370201.component';
import { CAVDEVComponent } from './screens/cav-dev/cav-dev.component';
import { FormMgrSrvcComponent } from './screens/form-mgr-srvc/form-mgr-srvc.component';
import { WICComponent } from './screens/wic/wic.component';


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
        path: 'Control-Panel', component:ControlPanelComponent,pathMatch:'full'
    },
    {
        path: 'FormMgrSrvc',component:FormMgrSrvcComponent, pathMatch:'full'
    },
    {
        path: 'WIC', component:WICComponent,pathMatch:'full'
    },

];
