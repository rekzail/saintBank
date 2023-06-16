import { Component } from '@angular/core';
import { UserService } from "../../users/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  identifier: string ="";
  password: string="";

  constructor(public userService: UserService) {}

  login() {
    const user = { identifier: this.identifier, password: this.password };
    this.userService.login(user).subscribe((data: any) => {
      console.log(data);
    });
  }
}


