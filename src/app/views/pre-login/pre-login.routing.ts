 
import { Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
 
export const PreLoginRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: LandingComponent,
        data: { title: "Home" }
      },      
    ]
  }
];
