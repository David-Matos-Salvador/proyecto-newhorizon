import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherModuleComponent } from './other-module.component';

const routes: Routes = [
  {
    path: '',
    component: OtherModuleComponent,
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'angular',
        loadChildren: () =>
          import('../angular/angular.module').then((m) => m.AngularModule),
      },
    ],
  },
  { path: 'song', loadChildren: () => import('../song/song.module').then(m => m.SongModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherModuleRoutingModule {}
