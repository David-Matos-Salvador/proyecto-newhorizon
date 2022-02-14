import { Injectable } from '@angular/core';
import { Song } from 'src/app/models/Song';
import { SONGS } from 'src/assets/mock/mock-songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  song: Song[];
  constructor() {
  this.song = [];
  }
  getSongs(year: number): Song[] {  
  this.song = SONGS[year - 1].items;
  return this.song;
  } 
}
