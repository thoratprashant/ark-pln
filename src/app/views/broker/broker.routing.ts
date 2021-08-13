import { Routes } from "@angular/router";  
import { ProfileComponent } from "./profile/profile.component";
import { SignupSuccessfulComponent } from "./signup-successful/signup-successful.component";

export const BrokerRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "profile",
        component: ProfileComponent,
        data: { title: "Broker profile" }
      },
      {
        path: "signup-successful",
        component: SignupSuccessfulComponent,
        data: { title: "Signup Successful" }
      },


 
    ]
  }
];
