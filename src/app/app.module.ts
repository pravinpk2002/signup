import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LoginFormComponent,
    SignUpComponent,
    PrivacyComponent,
    NavbarComponent,
    SectionComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
