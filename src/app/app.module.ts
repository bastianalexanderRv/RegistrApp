// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Agrega esta línea

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecuperarContraseñaPage } from './recuperar-contrasena/recuperar-contrasena.page'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [AppComponent, RecuperarContraseñaPage], // Agrega RecuperarContraseñaPage aquí
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule], // Agrega FormsModule aquí
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
