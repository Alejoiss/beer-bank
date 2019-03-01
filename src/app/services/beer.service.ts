import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BeerService {

    page = 1;
    per_page = 24;

    constructor(
        private http: HttpClient
    ) { }

    addFavorite() {}

    removeFavorite() {}

    getBeers(): Observable<Beer[]> {
        return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.per_page}`);
    }

    getBeersByName(): Observable<Beer[]> {
        return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.per_page}`);
    }

    getBeersById(): Observable<Beer[]> {
        return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.per_page}`);
    }
}
