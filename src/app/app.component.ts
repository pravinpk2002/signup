import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  color='yellow';
  data=10;
  update(){
    this.data=Math.floor(Math.random()*1000);
  }

  InputValue="";
  updateParent(value: string){
    console.log(value);
    this.InputValue=value;
    

  }


  getColor(type:string){
    switch(type){
      case 'red':
        this.color='red';
        break;
      case 'blue':
        this.color='blue';
        break;
        case 'green':
          this.color='green';
          break;

    }
  }
}
