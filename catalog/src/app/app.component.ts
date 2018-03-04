import { Component, OnInit } from '@angular/core';
import { LibraryService } from './services/library.service';
import { VideoService } from './services/video.service';
import { Observable } from 'rxjs/Observable';
import { IBook } from './models/book.interface';
import { IFilm } from './models/film.interface';
import { ConfigService } from './services/config.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Catalog App';

  public publicKey$: Observable<string>;
  public books$: Observable<IBook[]>;
  public films$: Observable<IFilm[]>;

  public constructor(
      private libraryService: LibraryService,
      private videoService: VideoService,
      private config: ConfigService) {
    this.publicKey$ = config.getConfig()
      .map(configValues => configValues.publicKey);
    this.books$ = libraryService.getBooks();
    this.films$ = videoService.getFilms();
  }
}
