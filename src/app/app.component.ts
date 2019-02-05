import { Component } from '@angular/core';
import { Work } from './work';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work';
  workers = [new Work(1, "", "", "", 1, 0, new Date(2019, 26, 1))];
}
