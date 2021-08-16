 
import { Routes } from "@angular/router"; 
import { BrokerSignUpComponent } from "./broker/broker-sign-up/broker-sign-up.component";

export const SignupRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "",
        component: BrokerSignUpComponent,
        data: { title: "Broker Signup" }
      },
 
 
    

    ]
  }
];
