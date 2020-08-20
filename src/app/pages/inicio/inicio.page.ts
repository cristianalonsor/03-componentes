import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Observable<Componente[]>;

  constructor(private menuCrtl: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }
  toogleMenu(){
    this.menuCrtl.toggle();
  }
}
