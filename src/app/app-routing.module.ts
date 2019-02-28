import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
