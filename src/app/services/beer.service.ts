import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BeerService {

    page = 0;
    per_page = 24;
    type = 'normal';
    favoritesBeers: string[] = [];

    constructor(
        private http: HttpClient
    ) {
        const favorites = window.localStorage.getItem('favoritesBeers');

        if (favorites) {
            this.favoritesBeers = favorites.split(',');
        }
    }

    addFavorite(id: number) {
        this.favoritesBeers.push(id.toString());
        this.setFavorites();
    }

    removeFavorite(id: number) {
        this.favoritesBeers = this.favoritesBeers.filter(favorite => favorite !== id.toString());
        this.setFavorites();
    }

    setFavorites() {
        window.localStorage.setItem('favoritesBeers', this.favoritesBeers.toString());
    }

    getBeers(page?: number): Observable<Beer[]> {
        if (!page) {
            if (this.type === 'normal') {
                this.page++;
            } else {
                this.page = 1;
            }
        } else {
            this.page = page;
        }
        this.type = 'normal';

        return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.per_page}`);
    }

    getBeersByName(name: string, page?: number): Observable<Beer[]> {
        if (!page) {
            if (this.type === 'search') {
                this.page++;
            } else {
                this.page = 1;
            }
        } else {
            this.page = page;
        }
        this.type = 'search';

        name = name.replace(/ /g, '_');
        return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.per_page}&beer_name=${name}`);
    }

    getBeersById(ids: string): Observable<Beer[]> {
        ids = ids.replace(/,/g, '|');
        return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?ids=${ids}`);
    }
}
