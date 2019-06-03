import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaguumaPage } from './maguuma.page';
import {ChartsModule} from 'ng2-charts';
const routes: Routes = [
  {
    path: '',
    component: MaguumaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [MaguumaPage]
})
export class MaguumaPageModule {}
