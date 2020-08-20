import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async abrirModal(){

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Cristian',
        pais: 'Chile'
      }
    });
    await modal.present();

    // todo lo que venga desde el dismiss, sera grabado en la variable data, transformandose en objeto
    const { data } = await modal.onDidDismiss();
    console.log('retorno de la info de ', data);
  }
}
