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
    path: 'activities',
    loadChildren: () => import('../activities/activities.module').then( m => m.ActivitiesPageModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
