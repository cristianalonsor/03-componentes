import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // este pipe se puede utilizar en todos los lugares que se requiera
  transform(arreglo: any[],
            texto: string,
            columna: string ): any[] {

    if (texto === ''){
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter( item => {
      // item que recibo, tomo la columnta y esa columna es la que aplica el filtro,
      // obligando a enviar un tercer argumanto en el filtro
      return item[columna].toLowerCase().includes( texto );
    } );


    console.log(arreglo);
    return arreglo;

  }

}
