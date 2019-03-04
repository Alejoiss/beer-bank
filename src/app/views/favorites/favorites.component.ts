import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    beers: Beer[];
    loading: boolean;

    constructor(
        private beerService: BeerService
    ) { }

    ngOnInit() {
        this.getBeers();
    }

    getBeers() {
        this.loading = true;
        this.beerService.getBeersById(this.beerService.favoritesBeers.toString())
            .subscribe(beers => {
                this.beers = beers;
                this.loading = false;
            });
    }

    reloadBeers() {
        this.getBeers();
    }
}
