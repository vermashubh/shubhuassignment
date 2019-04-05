import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginUserService } from './login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private myService: LoginUserService, private router: Router) { }
  form;
  ngOnInit() {
    localStorage.removeItem('token');
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin = function (user) {
    console.log(user);
    this.myService.loginUser(this.form.value).subscribe(response => {
      console.log(response[0].id);

      if ((Object.keys(response).length) == 0) {
        console.log("Invalid user");
      }
      else {
        console.log("valid user");
        localStorage.setItem('token',response[0].id);
        this.router.navigate(['/private/navbar']);
      }
    });

  }

}
