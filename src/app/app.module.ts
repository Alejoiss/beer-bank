import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BeerService } from './services/beer.service';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FavoritesComponent,
        NavbarComponent,
        BeerItemComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        BeerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
