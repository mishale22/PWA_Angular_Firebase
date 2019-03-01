import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LibroComponent } from './libro/libro.component';

//con este arreglo vamos a definir las rutas
const routes: Routes = [
  //objetos, JSON
  {path:"index", component: IndexComponent},
  //cuando no haya una ruta lo redirige a inicio
  //ahora manda para libro
  {path:"libro", component: LibroComponent},
  {path:"libromod", loadChildren:"./modules/libro/libro.module#LibroModule"},
  {path:"", redirectTo: "index", pathMatch: "full"},
  //vaya una pagina que lo mande para 404
  //2 asteriscos es la ruta por defecto
  {path:"**", redirectTo: "index"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
