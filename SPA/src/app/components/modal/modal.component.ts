import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {
  modal : boolean = false;
  datoE : string = "";
  //@Input() empleado : any = {};

  constructor() { }

  ngOnInit(): void {
    //this.datoE = this.empleado.nombre;
  }

  recibir(empleado: any): void{
    this.datoE = empleado.nombre;
  }

  public EventoModal():void {
    this.modal = !this.modal;
  }

}
