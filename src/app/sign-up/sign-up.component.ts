import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  title = 'Pipes';
  currentdate=Date();

  userForm= new FormGroup({

    user: new FormControl(''),
    password: new FormControl(''),
    Email: new FormControl(''),
   });

  formSubmission(){
    console.log(this.userForm.value);
    
  }
   

}
