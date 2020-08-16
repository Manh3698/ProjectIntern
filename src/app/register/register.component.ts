import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl('')
  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
  };

  onSubmit(){
    this.authService.register(this.registerForm.value).subscribe(
      res => {
        console.log(res);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("Đăng ký thành công");
      },
      error => {
        console.log(error)
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    )
  }

}
