import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
    this.presentLoading('Cargando...');
    // cancelo el loading independiente del proceso que sea
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);


  }
  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      // duration: 2000
    });
    return this.loading.present();
  }
}
