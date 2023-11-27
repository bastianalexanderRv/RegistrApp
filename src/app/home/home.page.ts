// home.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = {
    nombre: '',
    contrasena: '',
  };

  constructor(private router: Router) {}

  irAPaginaUsuario() {
    // Aquí podrías realizar la autenticación real con tu backend
    // Por ahora, simplemente redirigimos a la página de usuario
    this.router.navigate(['/usuario']);
  }
}

