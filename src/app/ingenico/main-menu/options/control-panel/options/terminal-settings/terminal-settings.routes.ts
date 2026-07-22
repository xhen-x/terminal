import { Routes } from "@angular/router";
import { TerminalSettingsComponent } from "./terminal-settings.component";
import { HumanInterfaceComponent } from "./options/human-interface/human-interface.component";
import { GeneralSettingComponent } from "./options/general-setting/general-setting.component";
import { EcoModeComponent } from "./options/eco-mode/eco-mode.component";
import { CommMeansComponent } from "./options/comm-means/comm-means.component";

export const Terminal_Settings_Routes: Routes = [
// need to change the path to load the childern path...
    
    {
        path: '', component:TerminalSettingsComponent, pathMatch:'full'
    },
    {
        path: 'General-setting', component:GeneralSettingComponent, pathMatch:'full'
    },
    {
        path: 'Human-interface', component:HumanInterfaceComponent, pathMatch:'full'
    },
    {
        path: 'Eco-mode', component:EcoModeComponent, pathMatch:'full'
    },
    {
        path: 'Comm-means', component:CommMeansComponent, pathMatch:'full'
    },


];