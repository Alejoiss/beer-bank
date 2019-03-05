import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { BeerService } from './services/beer.service';
import { InfiniteScrollService } from './services/infinite-scroll.service';
import { BeerComponent } from './views/beer/beer.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FavoritesComponent,
        NavbarComponent,
        BeerItemComponent,
        BeerComponent,
        InfiniteScrollDirective
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        BeerService,
        InfiniteScrollService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
