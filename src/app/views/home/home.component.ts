import { BeerService } from './../../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    beers: Beer[];

    constructor(
        private beerService: BeerService
    ) { }

    ngOnInit() {
        this.beerService.getBeers()
            .subscribe(beers => {this.beers = beers; console.log(this.beers)});
    }
}
