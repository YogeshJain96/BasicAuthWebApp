import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonListComponent } from "./common-list/common-list.component";
import { SpecialListComponent } from "./special-list/special-list.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  //bydefaul route to common list
  { path: "", redirectTo: "/commonlist", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "commonlist", component: CommonListComponent },
  {
    path: "speciallist",
    canActivate: [AuthGuard],
    component: SpecialListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
