import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({
      appId: 'angular-starter',
    }),
    BrowserTransferStateModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Registre el ServiceWorker tan pronto como la aplicación sea estable
    //   // o después de 30 segundos (lo que ocurra primero).
    //   registrationStrategy: 'registerWhenStable:30000',
    // }),
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
