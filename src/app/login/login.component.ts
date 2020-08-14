import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.login(this.loginForm.value).subscribe(
      res => {
        const token = JSON.stringify(res);
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
        location.reload();
      }
    )
  }

}
