// recuperar-contrasena-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarContraseñaPage } from './recuperar-contrasena.page'; // Corrige la importación aquí

const routes: Routes = [
  {
    path: '',
    component: RecuperarContraseñaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarContraseñaPageRoutingModule {} // Corrige el nombre de la clase aquí
