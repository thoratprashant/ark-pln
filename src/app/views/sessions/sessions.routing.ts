 
import { Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./error/error.component"; 
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
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
 
 
           
      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" }
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        data: { title: "Forgot password" }
      },
     {
        path: "coming-soon",
        component: ComingSoonComponent,
        data: { title: "Coming Soon" }
      },
      {
        path: "404",
        component: NotFoundComponent,
        data: { title: "Not Found" }
      },
      {
        path: "error",
        component: ErrorComponent,
        data: { title: "Error" }
      }
    ]
  }
];
