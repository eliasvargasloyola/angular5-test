import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpProfileService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:4200/profile/';
  }

  getProfileById(profileId: string) {
    return this._http.get(this.url.concat(profileId));
  }
}
