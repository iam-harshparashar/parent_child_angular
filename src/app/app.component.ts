import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data ='welcome to the angular';
  getfunction()
  {
    return "this is the function"
  }
}
