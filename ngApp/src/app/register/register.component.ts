import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData = { email: "", password: "" };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/speciallist"]);
      },
      err => console.log(err)
    );
  }
}
