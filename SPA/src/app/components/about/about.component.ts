import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataApiService, Empleado } from '../../services/data-api.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  personas:any = [];
  datoE : any = {};
  @ViewChild('modal') modals : ModalComponent;


  constructor( private dataApi : DataApiService) { }

  ngOnInit(): void {
    this.getAllPersonas();
  }

  getAllPersonas() : void {
     this.dataApi.getAllPersonas().subscribe(books => this.personas = books );
  }

  showModal(Empleado : any):void {
    this.datoE = Empleado;
      this.modals.EventoModal();
      this.modals.recibir(Empleado);
  }
}
