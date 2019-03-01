import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
    selector: 'app-beer-item',
    templateUrl: './beer-item.component.html',
    styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit {

    @Input() beer: Beer;
    favorite = false;

    constructor() { }

    ngOnInit() {
    }

    isFavorite(): boolean {
        return this.favorite;
    }

    markFavorite() {
        this.favorite = !this.favorite;
    }
}
