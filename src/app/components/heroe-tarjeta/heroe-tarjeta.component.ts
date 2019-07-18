import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @ Input() heroe:any = {}; // con el decorador (@Input) cambio la propiedad normal para que sea recibida desde afuera 
  @Input () index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }


  ngOnInit() {
  }

  verHeroe() {
// console.log( this.index );
this.router.navigate( ['/heroe', this.index] );
// his.heroeSeleccionado.emit( this.index);
  }

}
