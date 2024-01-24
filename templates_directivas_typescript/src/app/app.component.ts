import { Component} from '@angular/core';
import { Producto } from './interfaces/Producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templates_directivas_typescript';
  productosSeleccionados: Producto[] = []
  modoOscuro: boolean = false

  recibirProductoDeMiNietoATravesDeMiHijo(producto: Producto){
    this.productosSeleccionados.push(producto)
  }

  recibirOrdenParaCambiarElFondo(modoOscuro: boolean){
    this.modoOscuro = modoOscuro
  }


}
