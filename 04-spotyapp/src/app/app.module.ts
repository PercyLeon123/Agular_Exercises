import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http' /* metodo para usar http */

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistaComponent } from './component/artista/artista.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';

/* Importar Rutas */
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, /* metodo para usar http */
    RouterModule.forRoot(ROUTES, {useHash: true}) /* sistema de rutas */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
