import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {
  modal : boolean = false;
  datoE! : Empleado;
  nombre:string="";
  cargo:string="";

  //@Input() empleado : any = {};
  @Output() Listado : EventEmitter<number>;

  constructor(private dataApi : DataApiService) { 
    this.Listado = new EventEmitter();
  }

  ngOnInit(): void {
    //this.datoE = this.empleado.nombre;
  }

  recibir(empleado: any): void{
    this.datoE = empleado;
    this.nombre = empleado.nombre;
    this.cargo = empleado.cargo;
  }

  public EventoModal():void {
    this.modal = !this.modal;
  }

  updatePersonas(form: NgForm){
    console.log(form.value.nombre);
    this.dataApi.updatePersonas({
      id : this.datoE.id,
      nombre : form.value.nombre,
      cargo: form.value.cargo
    });
    
    this.Listado.emit(this.datoE.id);
  }
}
