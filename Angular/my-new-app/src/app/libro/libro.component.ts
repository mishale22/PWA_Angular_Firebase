import { Component, OnInit, OnDestroy } from '@angular/core';
import { Libro} from '../models/libro';
import { LibroService } from '../services/libro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit, OnDestroy {

  libroSelected: Libro;
  libros: Libro[];
  //crear arreglo de suscripciones
  private suscriptions: Subscription[]= [];

  constructor(private libroService:LibroService) { 
    //como es asincrono, hay que inicializarlo
    this.libros= [];
  }

  ngOnInit() {
    this.libroSelected = new Libro;
    //aqui nos vamos a suscribir al observable
    //a los libros le asigne lo que llega por "param"
    //librosDB son los libros que traigo de la base de datos
    this.suscriptions.push(this.libroService.getLibros().subscribe(librosDB => 
        this.libros =librosDB
      ));
  }

  showDetail(libro:Libro){
    this.libroSelected=libro;
  }

  onGuardar(libro:Libro){
    //si no hay un id, tiene que guardar
    //if(!libro.id){
      //libro.id=Math.floor(Math.random()*200);
     //ya no va a hacer esto para db this.libros.push(libro);
      this.libroService.addBook(libro);
    //} 
  }

  delete(libro:Libro){
    //ya no tenemos que hacer esto 
    //let index= this.libros.findIndex(
      //los 3 iguales son para el mismo tipo de dato
      //libroTemp es con el que itero
      //(libroTemp) => {return libro.id === libroTemp.id}
      
     // );
    //eliminar desde x posicion y cuanto voy a eliminar
    //this.libros.splice(index,1);
    this.libroService.deleteBook(libro);
  }

  //cuando salimos del componente hay que quitarse de la suscripcion
  //necesito el elemento que se suscribio
  ngOnDestroy(){
    this.suscriptions.forEach( (suscription: Subscription)=>
      suscription.unsubscribe()
      );
  }

}
