import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { SongComponent } from './song.component';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    SongComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    SongRoutingModule
  ]
})
export class SongModule { }
