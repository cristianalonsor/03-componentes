import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertCtrl: AlertController) { }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'subtitulo',
      message: 'Este es un mensaje de alerta',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmar');
          }
        }
    ]
  });
    await alert.present();
  }
  async presentAlertPrompt() {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Formulario!',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre dentro y vea la magia',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
  }
}
