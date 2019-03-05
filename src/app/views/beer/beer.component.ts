import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer';

import { BeerService } from './../../services/beer.service';

@Component({
    selector: 'app-beer',
    templateUrl: './beer.component.html',
    styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

    id: number;
    beer: Beer;
    loading = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private beerService: BeerService
    ) { }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.getBeer();
    }

    getBeer() {
        this.beerService.getBeersById(this.id.toString())
            .subscribe(beers => {
                this.beer = beers[0];
                this.loading = false;
            });
    }
}
