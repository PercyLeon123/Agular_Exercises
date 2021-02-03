import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi : DataApiService) { }

  ngOnInit(): void {
  this.getAllPersonas();
  }

  getAllPersonas() : void {
    this.dataApi.getAllPersonas().subscribe(books => console.log(books));
  }

  addPersonas(form: NgForm){
    console.log(form.value.nombre);
    this.dataApi.addPersonas({
      nombre : form.value.email,
      cargo: form.value.cargo
    });
  }

}
