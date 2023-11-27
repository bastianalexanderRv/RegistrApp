import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SistemaPageRoutingModule } from './sistema-routing.module';
import { SistemaPage } from './sistema.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SistemaPage]
})
export class SistemaPageModule {}
