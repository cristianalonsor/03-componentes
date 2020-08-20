import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(20);
  constructor(private PopoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number ){
    console.log(valor);
    this.PopoverCtrl.dismiss({
      item: valor,
    });
  }
}
