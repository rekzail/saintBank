import { Component } from '@angular/core';
import { UserService } from "../../users/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string="";
  email: string="";
  password: string="";

  constructor(public userService: UserService) {}

  register() {
    const user = { username: this.username, email: this.email,password: this.password };
    this.userService.register(user).subscribe((data: any) => {
      console.log(data);
    });
  }
}
