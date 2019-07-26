import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomePageModule'
  // },
  // {
  //   path: 'login',
  //   loadChildren: './pages/login/login.module#LoginPageModule'
  // },
  // {
  //   path: 'list',
  //   loadChildren: './list/list.module#ListPageModule'
  // },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'farmerslist',
  //   loadChildren: './pages/farmerslist/farmerslist.module#FarmerslistPageModule',
  //   canActivate: [AuthGuardService]
  // },
  {
    path: 'etracs',
    loadChildren: './pages/etracs/etracs.module#EtracsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'pgbwall',
    loadChildren: './pages/pgbwall/pgbwall.module#PgbwallPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'maguuma',
    loadChildren: './pages/maguuma/maguuma.module#MaguumaPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'hrmis',
    loadChildren: './pages/hrmis/hrmis.module#HrmisPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'gisportal',
    loadChildren: './pages/gisportal/gisportal.module#GisportalPageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'map', loadChildren: './pages/gisportal/map/map.module#MapPageModule', canActivate: [AuthGuardService] }

  // ,
  // {
  //   path: 'gisportal/:id',
  //   loadChildren: './pages/gisportal/mapdetails/mapdetails.component#MapdetailsComponent',
  //   canActivate: [AuthGuardService]
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
