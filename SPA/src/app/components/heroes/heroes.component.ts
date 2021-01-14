import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]=[];

  constructor( private _heroesService : HeroesService,
              private router : Router ) {
  /* Primero se ejecuta */
  }

  ngOnInit(): void {
    /* Segundo se ejecuta */
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx:number){
  this.router.navigate(['/heroe', idx]);
  }
}
