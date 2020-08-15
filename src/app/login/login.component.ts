import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';



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
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe(
      res => {
        // this.tokenStorage.saveToken(res.accessToken);
        console.log(res.token);
        this.tokenStorage.saveToken(res.token);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigateByUrl('/');
      },
      error => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        location.reload();
      }
    )
  }

}
