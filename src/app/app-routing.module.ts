import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { HomeComponent } from './operaciones/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'other-modules',
    loadChildren: () =>
      import('./other-module/other-module.module').then(
        (m) => m.OtherModuleModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
