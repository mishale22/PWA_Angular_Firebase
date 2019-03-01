import { Injectable } from '@angular/core';
import { Libro} from '../models/libro';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libroCollection: AngularFirestoreCollection<Libro>;
  libros: Observable<Libro[]>;

  constructor(private readonly db: AngularFirestore) {
    this.libroCollection = this.db.collection('libros');
    this.libros = this.libroCollection.valueChanges();
   }

  //dentro del observable se pone el tipo de lo que va a observar
  getLibros(): Observable<Libro[]>{
    return this.libros;
  }

  addBook(libro: Libro){
    let id;
    if(!libro.id){
      id= this.db.createId();
    }else{
      id= libro.id;
    }
    let libroTemp = {id, "name": libro.name, "author":libro.author};
    //doc para traer el documento, mandamos id y luego seteamos
    this.libroCollection.doc(id).set(libroTemp);
  }

  deleteBook(libro: Libro){
    this.libroCollection.doc(libro.id).delete();
  }
}
