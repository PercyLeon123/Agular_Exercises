import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre2 : string = 'PErcCy LeOn';
  nombre : string = 'Capitan America';
  arreglo : any = [1,2,3,4,5,6,7,8,9,10];

  PI : number = Math.PI;
  porcentaje : number = 0.235;
  salario : number = 1234.5;
  fecha : Date = new Date();
  idioma : string = 'es';
  UrlVideo : string = 'https://www.youtube.com/embed/XHZhM426qfQ';
  activar : boolean = false;

  valorPromesa = new Promise<string> ( (resolve, reject) =>{
    setTimeout(()=>{
      resolve('llego al data');
    }, 4500)
  });

  heroe : any = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion : {
      calle : 'Primavera',
      casa: 20
    }
  }

  cambiarIdioma(idio : string):void {
    this.idioma = idio;
  }
}
