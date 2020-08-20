import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {


  personajes = ['superman', 'aquaman', 'wonderwoman', 'linterna verde', 'flash', 'batman'];
  constructor() { }

  ngOnInit() {
  }
  doReorder( event ){
    console.log(event);
    // le asigno a una const el item a mover,borrandolo desde el arreglo
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    // vuelvo a insertar item que borre del arreglo, que etaba en la constante almacenado
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }
  onClick(){
    console.log(this.personajes);
  }

}
