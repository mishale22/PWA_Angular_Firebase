import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroComponent } from './libro.component';
import { LibroDetailComponent } from './libro-detail/libro-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LibroComponent, LibroDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LibroModule { }
