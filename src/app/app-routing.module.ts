import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
 
  {
    path: "about-us",
    component: AboutUsComponent,

  },
  {
    path: "sign-up",
    component: SignUpComponent,

  },
  {
    path: "login-form/:id",
    component: LoginFormComponent,

  },
  {
    path: "privacy",
    component: PrivacyComponent,

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
