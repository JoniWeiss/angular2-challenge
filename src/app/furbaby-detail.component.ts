import { Component, Input } from '@angular/core'
import { Furbaby } from './furbaby'

@Component({
    selector: 'furbaby-detail',
    template: `
    <div *ngIf="furbaby">
        <h2>{{furbaby.name}} Details:</h2>
        <div>
            <label>Name: </label>
            // Two-way data binding!!
            <input [(ngModel)]="furbaby.name" placeholder="name">
        </div>
        <div><label>id: </label>{{furbaby.id}}</div>
        <div><label>Breed: </label>{{furbaby.breed}}</div>
        <div><img class="furbaby-md" src="../assets/furbabies/{{furbaby.image}}"></div>
    </div>
    `,
     styleUrls: ['./app.component.css']
})

export class FurbabyDetailComponent {
    @Input()
    furbaby: Furbaby;
}