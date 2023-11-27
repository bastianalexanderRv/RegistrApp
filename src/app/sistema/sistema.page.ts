import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { GoogleMap } from '@capacitor/google-maps';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
 selector: 'app-sistema',
 templateUrl: 'sistema.page.html',
 styleUrls: ['sistema.page.scss'],
})
export class SistemaPage implements AfterViewInit {
 latitud: number = 0; // Asigna un valor inicial
 longitud: number = 0; // Asigna un valor inicial
 imagenSelfie: string = ''; // Asigna un valor inicial
 nombreUsuario: string = ''; // Asigna un valor inicial
 asistencia = {
 fecha: '',
 hora: ''
 };

 @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

 constructor(private http: HttpClient, private alertController: AlertController, private router: Router) {}

 async ngOnInit() {
  const navigation = this.router.getCurrentNavigation();
  const state = navigation?.extras?.state as {nombreUsuario: string};
  this.nombreUsuario = state?.nombreUsuario;
 }
 

 async obtenerUbicacion() {
 const posicion = await Geolocation.getCurrentPosition();
 this.latitud = posicion.coords.latitude;
 this.longitud = posicion.coords.longitude; 
 }
 

 async tomarSelfie() {
 const foto = await Camera.getPhoto({
 quality: 90,
 allowEditing: false,
 resultType: CameraResultType.DataUrl,
 source: CameraSource.Camera,
 });

 this.imagenSelfie = foto.dataUrl || ''; // Asigna un valor inicial en caso de que sea undefined
 }

 async registrarAsistencia() {
 this.http.post('http://tu-api/registrarAsistencia', this.asistencia)
 .subscribe(
  (response: any) => {
    console.log('Asistencia registrada con éxito');
    this.router.navigate(['/sistema'], { state: { nombreUsuario: this.nombreUsuario } });
  },
  (error) => {
    console.log('Error al registrar asistencia');
  }
 );
 }

 async ngAfterViewInit() {
 await this.crearMapa(); // Llama al método crearMapa aquí
 }

 async crearMapa() {
 if (this.mapContainer) {
 const map = await GoogleMap.create({
   latitude: this.latitud,
   longitude: this.longitud,
   zoom: 10,
   mapType: 'roadmap',
   showUserLocation: true,
   container: this.mapContainer.nativeElement,
 } as any); 
 }
 }

 async presentAlert() {
 const alert = await this.alertController.create({
   header: 'Asistencia registrada',
   message: `Ubicación: Latitud ${this.latitud}, Longitud ${this.longitud}<br>Fecha de Asistencia: ${this.asistencia.fecha}<br>Hora de Asistencia: ${this.asistencia.hora}`,
   buttons: ['OK']
 });

 await alert.present();
 }

}





