import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje: number;

  constructor() { }

  ngOnInit() {
  }

  cambioRango( event ){

    // tomo la propiedad detail.value del event y como el numero de la barra de progreso es entre
    // 0 y 1, se divide por 100
    this.porcentaje = event.detail.value / 100;
    console.log('el porcentaje es: ', this.porcentaje * 100, '%');

  }
}
