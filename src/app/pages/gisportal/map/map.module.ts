import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapPage } from './map.page';
import { SafePipeModule } from 'src/app/safepipe';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  },
  {
    path: ':id',
    component: MapPage
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
  declarations: [MapPage]
})
export class MapPageModule {}
