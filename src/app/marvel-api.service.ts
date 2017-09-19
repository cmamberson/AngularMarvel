import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelApiService {
  private baseUrl: string = "https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=1&apikey=b73ee211c9d7a4ee05cb511e9e20a6d5&hash=f85a72659e7ae4456d7685de2fec6cc9";

  constructor(private http: Http) { }

  getHeroInfo(): Observable<any> {

    return this.http.get(this.baseUrl)
    .map(result => {
      return result.json()
    })
  }

  getHeroSearch(addSearchTerm): Observable<any> {
    
        return this.http.get(this.baseUrl + addSearchTerm)
        .map(result => {
          return result.json()
        })
      }
}
