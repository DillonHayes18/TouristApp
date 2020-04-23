import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  } ,
  {

    path: 'news',
    loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('../weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('../password/password.module').then( m => m.PasswordPageModule)
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
