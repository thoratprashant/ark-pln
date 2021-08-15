 
import { Routes } from "@angular/router"; 
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SigninComponent } from "./signin/signin.component";
 

export const AuthRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" }
      }, 
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        data: { title: "Forgot Password" }
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
        data: { title: "Reset Password" }
      },

    ]
  }
];
