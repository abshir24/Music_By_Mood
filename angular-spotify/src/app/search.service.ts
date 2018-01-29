import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
  private clientId='8a35cf0f89f944d3ba5e724e5fe728fe';
  private artistUrl="https://api.spotify.com/v1/search?type=artist&limit=10&client_id="+this.clientId+"&q="
  constructor(private http:Http){ }

  searchArtists(searchTerm){
    let url = this.artistUrl + searchTerm
    return this.http.get(url).map(res=>res.json())
  }

}
