import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EtracsPage } from './etracs.page';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: EtracsPage
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
  declarations: [EtracsPage]
})
export class EtracsPageModule {}
