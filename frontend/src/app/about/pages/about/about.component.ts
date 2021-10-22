import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  greetResponse = "";

  constructor() { }

  updateGreetText(event: any): void {
    go.main.App.Greet(event.target.value).then((response: string) => this.greetResponse = response);
  }
}
