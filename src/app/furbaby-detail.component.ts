import { Component, Input } from '@angular/core';
import { Furbaby } from './furbaby'

@Component({
    selector: 'furbaby-detail',
    templateUrl: './furbaby-detail.component.html',
     styleUrls: ['./app.component.css']
})

export class FurbabyDetailComponent {
    @Input()
    furbaby: Furbaby;
}