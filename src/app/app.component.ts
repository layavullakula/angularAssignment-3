import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  secret: string = "Laya";
  arr = [];

  displayText = () =>{
      this.show = true;
      this.arr.push(new Date());
      setTimeout(()=>{
        this.show = false;
      },500)
    
  }
}
