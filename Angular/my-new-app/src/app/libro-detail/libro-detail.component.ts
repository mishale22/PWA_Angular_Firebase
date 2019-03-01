import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

  @Input() libro: Libro;
  @Output() save = new EventEmitter<Libro>();;
  constructor() { }

  ngOnInit() {
  }

  onSave(libro: Libro) {
   //name y author tienen que tener un valor para que haga algo
   //emit dispara un evento
    if(libro.name && libro.author){
      this.save.emit(libro);
      this.reset();
    }   
  }

  reset(){
    this.libro = new Libro();
  }
}
