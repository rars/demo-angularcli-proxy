import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../models/book.interface';
import { Observable } from 'rxjs';

@Injectable()
export class LibraryService {

  public constructor(
    private http: HttpClient) {}

  public getBooks(): Observable<IBook[]> {
    return this.http.get('/library/books') as Observable<IBook[]>;
  }
}
