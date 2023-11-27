// recuperar-contraseña.page.ts

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-recuperar-contraseña',
  templateUrl: 'recuperar-contrasena.page.html',
  styleUrls: ['recuperar-contrasena.page.scss'],
})
export class RecuperarContraseñaPage {
recuperarContrasena() {
throw new Error('Method not implemented.');
}
nombreUsuario: any;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  recuperarContraseña() {
    // Implementa la lógica para recuperar la contraseña aquí
    // Puedes cerrar el modal después de realizar la acción
    this.modalController.dismiss();
  }
}
