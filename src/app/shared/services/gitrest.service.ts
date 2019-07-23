import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const apiURL = 'https://api.github.com/';

@Injectable()
export class GitRestService {

  public currrentUser;
  public name;
  public avatar_url;

  constructor(private _httpClient: HttpClient) {
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + this.currrentUser);
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/vnd.github.inertia-preview+json');

    return headers;
  }

  getUser(): Promise<any> {
    return this._httpClient.get(apiURL + 'user', {headers: this.getHeaders()}).toPromise();
  }

  getRepos() {
    return this._httpClient.get(apiURL + 'user/repos', {headers: this.getHeaders()}).toPromise();
  }

  getProjects() {
    return this._httpClient.get(apiURL + 'users/' + this.name + '/projects', {headers: this.getHeaders()}).toPromise();
  }

  getFollowers() {
    return this._httpClient.get(apiURL + 'users/' + this.name + '/followers', {headers: this.getHeaders()}).toPromise();
  }

  getFollowing() {
    return this._httpClient.get(apiURL + 'users/' + this.name + '/following', {headers: this.getHeaders()}).toPromise();
  }

}
