import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  // el actionSheetCrtl es el nombre con el que lo vere fuera, importo el actionsheetcontroller
  // y al aplicar el enter se llama automaticamente arriba
  constructor(private actionSheetCtrl: ActionSheetController) { }

        // es una promesa, tarea asincrona
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      // vemos todos los botones hacia abajo y sus propiedades
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  ngOnInit() {
  }

}
