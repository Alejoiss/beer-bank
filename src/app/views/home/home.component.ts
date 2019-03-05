import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

import { BeerService } from './../../services/beer.service';
import { InfiniteScrollService } from './../../services/infinite-scroll.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    beers: Beer[] = [];
    search: string;
    loading = false;

    constructor(
        private beerService: BeerService,
        private infiniteScrollService: InfiniteScrollService
    ) { }

    ngOnInit() {
        this.getBeers(1);
        this.subscribeInfiniteScroll();
    }

    getBeers(page?) {
        this.loading = true;
        this.beerService.getBeers(page)
            .subscribe(beers => {
                this.beers = this.beers.concat(beers);
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
                this.beers = [];
                this.getBeers();
            }
        }
    }

    subscribeInfiniteScroll() {
        this.infiniteScrollService.scrollPosition
            .subscribe(position => {
                if (position === 'end' && !this.search) {
                    this.getBeers();
                }
            });
    }
}
