import { Component } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  componentTitle = "I am app component from component.ts";

  ClickHandler(){
     alert("Click!");
  };
}
