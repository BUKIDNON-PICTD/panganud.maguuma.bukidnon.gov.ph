import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GisportalPage } from './gisportal.page';
import { SafePipeModule } from 'src/app/safepipe';
import { MapdetailsComponent } from './mapdetails/mapdetails.component';


const routes: Routes = [
  {
    path: '',
    component: GisportalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SafePipeModule
  ],
  declarations: [GisportalPage]
})
export class GisportalPageModule {}
