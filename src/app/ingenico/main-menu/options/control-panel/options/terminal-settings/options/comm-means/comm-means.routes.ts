import { Routes } from "@angular/router";
import { CommMeansComponent } from "./comm-means.component";
import { BluetoothComponent } from "./options/bluetooth/bluetooth.component";
import { WiFiComponent } from "./options/wi-fi/wi-fi.component";
import { MobileNetworkComponent } from "./options/mobile-network/mobile-network.component";
import { PCLComponent } from "./options/pcl/pcl.component";


export const Comm_Means_Routes: Routes = [
// need to change the path to load the childern path...
    
    {
        path: '', component:CommMeansComponent, pathMatch:'full'
    },
    {
        path: 'Bluetooth', component:BluetoothComponent, pathMatch:'full'
    },
    {
        path: 'Wi-Fi', component:WiFiComponent, pathMatch:'full'
    },
    {
        path: 'Mobile-Network', component:MobileNetworkComponent, pathMatch:'full'
    },
    {
        path: 'PCL', component:PCLComponent, pathMatch:'full'
    },



];