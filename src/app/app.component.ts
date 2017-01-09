import { Component, OnInit } from '@angular/core';

import { Furbaby } from './furbaby';

import { FurbabyService } from './furbaby.service'

@Component({
  selector: 'app-root',
  template: `
   <h2>{{subTitle}}</h2>

    <ul class="furbabys">
        <li *ngFor="let furbaby of furbabys" [class.selected]="furbaby === selectedFurbaby" (click)="onSelect(furbaby)">
            <span class="badge">{{furbaby.id}}</span> {{furbaby.name}} {{furbaby.species}} {{furbaby.breed}}
            <img class="furbaby-sm" src="../assets/furbabies/{{furbaby.image}}" alt="">
        </li>
    </ul>
    <furbaby-detail [furbaby]="selectedFurbaby"></furbaby-detail>
    `,
  styleUrls: ['./app.component.css'],
  providers: [FurbabyService]
})

export class AppComponent implements OnInit {
  title = 'Furbaby Photo Book';
  subTitle = 'A photo book of our family\'s furry family.';
  furbabies: Furbaby[];
  selectedFurbaby: Furbaby;

  constructor(private furbabyService: FurbabyService) { }

  getFurbabies(): void {
    this.furbabyService.getFurbabies().then(furbabies => this.furbabies = furbabies)
  }

  ngOnInit(): void {
    this.getFurbabies;
  }

  
  onSelect(furbaby: Furbaby): void {
    this.selectedFurbaby = furbaby;
  }
}

