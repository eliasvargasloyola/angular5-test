import {Injectable} from '@angular/core';
import {PersonMap} from '../domain/person-map';
import {HttpProfileService} from './http-profile.service';

@Injectable()
export class ProfileService {

  public profilesList: Array<PersonMap> = [];

  constructor(public _httpProfile: HttpProfileService) {
  }

  getProfileById(profileId: string) {
    return this._httpProfile.getProfileById(profileId);
  }

}
