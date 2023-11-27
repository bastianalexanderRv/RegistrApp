// usuario.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RecuperarContraseñaPage } from '../recuperar-contrasena/recuperar-contrasena.page';

@Component({
  selector: 'app-usuario',
  templateUrl: 'usuario.page.html',
  styleUrls: ['usuario.page.scss'],
})
export class UsuarioPage 
{
  usuario = 
  {
    nombreUsuario: '',
    contrasena: '' ,
    errorMessage: '',  
  };
 
  isFormValid = true;
  errorMessage: string | undefined;
 
  onInputChange() {
    this.isFormValid = this.usuario.nombreUsuario !== '' && this.usuario.contrasena !== '';
  }
  


  constructor(private router: Router, private modalController: ModalController) {}
  abrirModalRecuperarContrase: any;

  iniciarSesion() {
    
    if (this.isFormValid) {
      this.router.navigate(['/sistema', { nombreUsuario: this.usuario.nombreUsuario }]);
    } else {
      this.errorMessage = 'Por favor, ingresa tus credenciales.';
      this.router.navigate(['/not-found']);
    }
   }
   

  async abrirModalRecuperarContrasena() {
    const modal = await this.modalController.create({
      component: RecuperarContraseñaPage,
      componentProps: {
        
      }
    });

    return await modal.present();
  }
}
