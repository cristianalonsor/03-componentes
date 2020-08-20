import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  // estructura del arreglo en ty
  data: Observable<any>;
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) {}
  ngOnInit() {
    // this.dataService.getUsers().subscribe( console.log );
    this.data = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1250,
      color: 'danger'
    });
    toast.present();
  }

  favorito(user){
    // console.log('favorito', user);
    this.presentToast('Guardado en Favoritos');
    this.lista.closeSlidingItems();
  }

  compartir(user){
    // console.log('compartir', user);
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  borrar(user){
    // console.log('borrar', user);
    this.presentToast('Eliminado');
    this.lista.closeSlidingItems();
  }

}
