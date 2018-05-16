import { Injectable } from '@angular/core';
import { IConfig } from '../models/config.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  public constructor(
    private http: HttpClient) {}

  public getConfig(): Observable<IConfig> {
    return this.http.get('api/config') as Observable<IConfig>;
  }
}
