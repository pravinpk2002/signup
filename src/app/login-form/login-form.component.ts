import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  // display=true;
  // toggle(){
  //   this.display = !this.display;
  // }

  getinputData(data: NgForm){
    console.log(data);

  }

}
