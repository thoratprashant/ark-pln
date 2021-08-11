 
import { Routes } from "@angular/router";  
import { ProfileComponent } from "./profile/profile.component";
 

export const BrokerRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "profile",
        component: ProfileComponent,
        data: { title: "Broker profile" }
      },


 
    ]
  }
];
