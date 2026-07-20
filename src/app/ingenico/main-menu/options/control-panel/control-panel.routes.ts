import { Routes } from '@angular/router';
import { ControlPanelComponent } from './control-panel.component';
import {AppsReportsComponent} from './options/apps-reports/apps-reports.component'
import { SoftwareMgmtComponent } from './options/software-mgmt/software-mgmt.component';
import { TerminalSettingsComponent } from './options/terminal-settings/terminal-settings.component';
import { TerminalInfoComponent } from './options/terminal-info/terminal-info.component';



export const Control_Panel_Routes: Routes = [
// need to change the path to load the childern path...
    
    {
        path: '', component:ControlPanelComponent, pathMatch:'full'
    },
    {
        path: 'Apps-reports',component:AppsReportsComponent,pathMatch:'full'
    },
    {
        path: 'Software-mgmt',component:SoftwareMgmtComponent,pathMatch:'full'
    },
    {
        path: 'Terminal-info',component:TerminalInfoComponent,pathMatch:'full'
    },
    {
        path: 'Terminal-settings',component:TerminalSettingsComponent,pathMatch:'full'
    },

];
