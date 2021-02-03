import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private http : HttpClient ) { }

  getAllPersonas(){
    const url_api = 'http://localhost:55957/api/Empleado';
    return this.http.get(url_api);
  }

  addPersonas(empleado : Empleado){
    console.log(empleado.cargo);
    const url_api = 'http://localhost:55957/api/Empleado';
    this.http.post(url_api, empleado)
    .subscribe(data => data);
  }

}

export interface Empleado{
  nombre: string;
  cargo: string;
}
