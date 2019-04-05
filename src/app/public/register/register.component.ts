import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddUserService } from './add-user.service';
import { passwordValidator } from './password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private myService: AddUserService) { }

  form;
  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      lastname: ['', Validators.required],
      phone_number: ['', Validators.required],
      brief : [''],
      confirm_password: ['', [Validators.required, passwordValidator]]
    });
  }

  onRegister = function (user) {
    console.log(user);
    console.log(this.form.controls.confirm_password);


    this.myService.addUser(this.form.value).subscribe(response => {
      console.log(response);
    });
  }

}
