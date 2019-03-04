import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

import { BeerService } from './../../services/beer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    beers: Beer[];
    search: string;
    loading = false;

    constructor(
        private beerService: BeerService
    ) { }

    ngOnInit() {
        this.getBeers();
    }

    getBeers() {
        this.loading = true;
        this.beerService.getBeers(1)
            .subscribe(beers => {
                this.beers = beers;
                this.loading = false;
            });
    }

    searchBeer(event: KeyboardEvent) {
        if (event.type === 'search') {
            this.loading = true;
            if (this.search) {
                this.beerService.getBeersByName(this.search, 1)
                    .subscribe(beers => {
                        this.beers = beers;
                        this.loading = false;
                    });
            } else {
                this.getBeers();
            }
        }
    }
}
