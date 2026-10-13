import { Component } from '@angular/core';
import { Person } from './person/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Person],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}