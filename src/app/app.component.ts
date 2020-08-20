import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // importamops el componente observable y el componente la interfaz
  componentes: Observable<Componente[]>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // se importa el dataService de tipo DataService para poder trabajar con las opciones del menu
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // utilizo el componente que no existia asignandole el dataService recvien importado
      // que recupera los valores del menu
      this.componentes = this.dataService.getMenu();
    });
  }
}
