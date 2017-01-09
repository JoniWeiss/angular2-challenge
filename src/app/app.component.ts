import { Component } from '@angular/core';
import { Furbaby } from './furbaby';

const FURBABYS: Furbaby[] = [
  { id: 11, name: 'Terry', species: 'dog', breed: 'Shelty', image: 'Brooklyn.jpg' },
  { id: 12, name: 'Miles', species: 'dog', breed: 'Cocker Spaniel', image: 'Buckley.jpg' },
  { id: 13, name: 'Izzy', species: 'dog',  breed: 'Maltese', image: 'Butler.jpg' },
  { id: 14, name: 'Daisy', species: 'dog', breed: 'Black Labradore', image: 'Guinness.jpg' },
  { id: 15, name: 'Coda', species: 'dog',  breed: 'Wolf', image: 'Maggie.jpg' }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Furbaby Photo Book';
  subTitle = "A photo book of our family's furry family."
  furbabys = FURBABYS;
  selectedFurbaby: Furbaby;
  onSelect(furbaby: Furbaby): void {
    this.selectedFurbaby = furbaby;
  }
}

