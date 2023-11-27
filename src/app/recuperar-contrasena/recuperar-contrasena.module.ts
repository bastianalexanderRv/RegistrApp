// recuperar-contrasena.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RecuperarContraseñaPage } from './recuperar-contrasena.page'; // Corrige la importación aquí
import { RecuperarContraseñaPageRoutingModule } from './recuperar-contrasena-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContraseñaPageRoutingModule,
  ],
  
})
export class RecuperarContraseñaPageModule {}
