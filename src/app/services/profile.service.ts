import { Injectable } from '@angular/core';
import {Person} from "../domain/person";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfileById(profileId:string){
    return new Person('Ingenieria en Informatica', 'Estudiante de Ingenieria en Informatica', true, 'red', ['Java', 'SpringBoot'], 200, 'USD', 3);
  }
}
