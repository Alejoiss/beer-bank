import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfiniteScrollService {

    scrollPosition: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }
}
