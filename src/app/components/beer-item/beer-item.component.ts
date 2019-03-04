import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
    selector: 'app-beer-item',
    templateUrl: './beer-item.component.html',
    styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit {

    @Input() beer: Beer;
    @Output() beerRemoved = new EventEmitter();
    favorite = false;

    constructor(
        private beerService: BeerService
    ) { }

    ngOnInit() {
        this.favorite = this.beerService.favoritesBeers.indexOf(this.beer.id.toString()) > -1;
    }

    isFavorite(): boolean {
        return this.favorite;
    }

    addFavorite() {
        this.favorite = true;
        this.beerService.addFavorite(this.beer.id);
    }

    removeFavorite() {
        this.favorite = false;
        this.beerService.removeFavorite(this.beer.id);
        this.beerRemoved.emit();
    }
}
