import { Routes } from "@angular/router";  
import { DashboardDayOneComponent } from "./dashboard-day-one/dashboard-day-one.component";
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
      {
        path: "day-one",
        component: DashboardDayOneComponent,
        data: { title: "Dashboard Day One" }
      },


 
    ]
  }
];
