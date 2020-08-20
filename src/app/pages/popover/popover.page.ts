import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }
  async mostrarPop( evento ){
    const popover = await this.popoverCtrl.create({
// el argumento del evento es la posicion desde donde fue llamado el pop para mostrarse justo ahi

      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false

    });

    await popover.present();
    // procesamiento del argumento que recivo del popover
    const { data } = await popover.onDidDismiss(); // espera a que se cierre el popover para ejecutar
    // const { data } = await popover.onWillDismiss(); a penas empieza a cerrar ejecuta el codigos

    console.log('Padre', data);
  }
}
