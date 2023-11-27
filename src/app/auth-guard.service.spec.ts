import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private isAuthenticated = false;

 constructor() { }

 getIsAuthenticated(): boolean {
   return this.isAuthenticated;
 }

 login(username: string, password: string): boolean {
   // Aquí iría la lógica para autenticar al usuario
   // Por ahora, simplemente verificamos si el nombre de usuario y la contraseña son 'bast.ruz' y '12345'
   if (username === 'bast.ruz' && password === '12345') {
     this.isAuthenticated = true;
     return true;
   } else {
     this.isAuthenticated = false;
     return false;
   }
 }

 logout(): void {
   this.isAuthenticated = false;
 }
}