 
import { Routes } from "@angular/router"; 
import { BrokerSignUpComponent } from "./broker/broker-sign-up/broker-sign-up.component";
import { LpSignUpComponent } from "./loan-processor/lp-sign-up/lp-sign-up.component";

export const SignupRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "",
        component: BrokerSignUpComponent,
        data: { title: "Broker Signup" }
      },
      {
        path: "loan-processor",
        component: LpSignUpComponent,
        data: { title: "LP Signup" }
      },
 
 
    

    ]
  }
];
