 
import { Routes } from "@angular/router"; 
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";
import { ErrorComponent } from "./error/error.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { NotFoundComponent } from "./not-found/not-found.component";
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
