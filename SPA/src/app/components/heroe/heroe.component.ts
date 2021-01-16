import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' /* Lo usamos obtener el parametro enviado por la URL */
import { HeroesService } from '../../services/heroes.services'; /* usamos el servicio para obtenere los heroes */
/* Module */

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  constructor(private activateRoute : ActivatedRoute,
              private _heroesService : HeroesService) {

    /* Observador params */
    this.activateRoute.params.subscribe(params =>{
      /* params.id el id es el nombre que especificamos en el archivo de rutas */
      console.log(params.id);
      this.heroe = this._heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
   }

  ngOnInit(): void {
  }

}
