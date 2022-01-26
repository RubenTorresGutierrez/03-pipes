import { Component } from '@angular/core';
import { Heroe } from "./interfaces/heroe";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomSeguroPipe } from "./pipes/dom-seguro.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-pipes';

  //Atributtes
  nombre:string;
  nombre2:string;
  numero:number;
  numeros:number[];
  heroe:Heroe;
  promesa:Promise<String>;
  fecha:Date;
  videoUrl:string;
  passwd:string;
  oculto:boolean;

  constructor() {

    //Atributtes
    this.nombre = "Angular";
    this.nombre2 = "ruBeN toRreS";
    this.numero = 1240.1238;
    this.numeros = [1,2,3,4,5,6,7,8,9,10];
    this.heroe = {
      nombre: 'Logan',
      clave: 'wolverine',
      edad: 500,
      direccion: {
        calle: 'El Arbusto Valiente',
        numero: 14
      }
    }
    this.fecha = new Date();
    this.videoUrl = "https://www.youtube.com/embed/P4y6QeQoKbY";
    this.passwd = "1234";
    this.oculto = true;

    //Promise
    this.promesa = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("se acabó la promesa")
      }, 3000)
    });


  }

}
