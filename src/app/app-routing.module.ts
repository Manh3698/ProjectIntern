import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule) },
  { path: 'login' , component : LoginComponent},
  { path: 'register' , component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ 
    preloadingStrategy: PreloadAllModules 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
