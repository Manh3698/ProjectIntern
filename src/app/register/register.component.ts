import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

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
  })

  constructor(private registerService: RegisterService, private router : Router) { }

  ngOnInit(): void {
  };

  onSubmit(){
    this.registerService.register(this.registerForm.value).subscribe(
      res => {
        alert("Đăng ký thành công")
      },
      error => {
        console.log(error);
        // location.reload();
      }
    )
  }

}
