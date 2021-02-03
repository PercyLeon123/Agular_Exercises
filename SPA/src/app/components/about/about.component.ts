import { Component, OnInit, ViewChild, Input,ChangeDetectorRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ModalComponent } from '../modal/modal.component';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  personas:any = [];
  datoE : any = {};


  @ViewChild('modal') modals! : ModalComponent;


  constructor( private dataApi : DataApiService, private router : Router, private cdr: ChangeDetectorRef) { }

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

  getAllPersonas2(id : number) : void {
    this.getAllPersonas();
    this.cdr.markForCheck();
    //this.router.navigate(['/about']);
    
    this.modals.EventoModal();
 }

}
