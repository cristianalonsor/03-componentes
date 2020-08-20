import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { InfiniteScrollPageModule } from './infinite-scroll.module';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  // el @ViewChild sirve para tomar elementos desde el html y traerlos al backend
  @ViewChild(IonInfiniteScroll) InfiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }
  loadData( event ){
    console.log('cargando');

    setTimeout(() => {
      if (this.data.length > 50){
        event.target.complete();
        // desabilito dinamicamente el infinitescroll
        this.InfiniteScroll.disabled = true;
        return;
      }
      const nuevoarr = Array(20);
      this.data.push(...nuevoarr);
      event.target.complete();
      // el metodo push agrega datos al array en cuestion es como el .add
    }, 1000);
  }
}
