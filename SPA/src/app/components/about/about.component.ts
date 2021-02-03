import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ModalComponent } from '../modal/modal.component';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  personas:any = [];
  datoE : any = {};
  @ViewChild('modal') modals! : ModalComponent;


  constructor( private dataApi : DataApiService) { }

  ngOnInit(): void {
    this.getAllPersonas();
  }

  getAllPersonas() : void {
     this.dataApi.getAllPersonas().subscribe(books => this.personas = books );
  }

  showModal(empleado : Empleado):void {
    this.datoE = empleado;
      this.modals.EventoModal();
      this.modals.recibir(empleado);
  }
}
