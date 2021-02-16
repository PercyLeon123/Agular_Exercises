import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styles: [
  ]
})

export class ItemPersonaComponent implements OnInit {

  @Input() datos : any = {};
  @Output() personaSeleccionada : EventEmitter<any>;

  constructor() {
    this.personaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
