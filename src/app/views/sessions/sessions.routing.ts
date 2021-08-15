 
import { Routes } from "@angular/router"; 
import { BrokerSignUpComponent } from "./broker/broker-sign-up/broker-sign-up.component";

export const SessionsRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "signup",
        component: BrokerSignUpComponent,
        data: { title: "Broker Signup" }
      },
 
 
    

    ]
  }
];
