import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  data = [
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'tertiary',
      selected: true
    },
    {
      name: 'success',
      selected: false
    },
    {
      name: 'warning',
      selected: true
    }
  ];
  constructor() { }
// metodo recibe el check como parametro, mostrando por consola el objeto y su valor
  onClick( check ) {
    console.log(check);
  }
  ngOnInit() {
  }

}
