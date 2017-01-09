import { Injectable } from '@angular/core'

import { Furbaby } from './furbaby'
import { FURBABIES } from './mock-furbabies'


@Injectable()
export class FurbabyService {
    getFurbabies(): Promise<Furbaby[]> {
        return Promise.resolve(FURBABIES)
    } 
}