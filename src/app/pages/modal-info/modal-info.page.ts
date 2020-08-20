import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  // con el input recibo los argumentos desde el componente hijo hacia el padre
  @Input() nombre;
  @Input() pais;

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }
  salirSinArgumentos(){
    this.modalCrtl.dismiss();
  }
  salirConArgumentos(){
    this.modalCrtl.dismiss({
      nombre: 'Cristian',
      pais: 'Chile'
    });
  }
}
