import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { IForgotMyPasswordComponent } from './components/iforgot-my-password/iforgot-my-password.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    IForgotMyPasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginScreenComponent,
    IForgotMyPasswordComponent
  ],
})
export class LoginModule { }
