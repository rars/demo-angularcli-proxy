import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilm } from '../models/film.interface';

@Injectable()
export class VideoService {

  public constructor(
    private http: HttpClient) {}

  public getFilms(): Observable<IFilm[]> {
    return this.http.get('/video/films') as Observable<IFilm[]>;
  }
}
