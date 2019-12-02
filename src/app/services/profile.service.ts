import {Injectable} from '@angular/core';
import {Person} from "../domain/person";
import {PersonMap} from "../domain/person-map";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profilesList: Array<PersonMap> = [
    new PersonMap('123', new Person('Elias','Vargas', 'Ingenieria en Informatica', 'Estudiante de Ingenieria en Informatica', true, 'red', ['Java', 'SpringBoot'], 200, 'USD', 3, '56983457612', new Date(1992, 6, 28))),
    new PersonMap('456', new Person('Federico','Dechanzi','--', 'Estudiante de Psicologia', false, 'green', ['MindFunless', 'Cognitiva'], 500, 'ARG', 1, '549156239865', new Date(1998, 3, 13)))
  ];

  constructor() {
  }

  getProfileById(profileId: string) {
    let findPerson;
    this.profilesList.forEach(personMap => {
      if (personMap.key === profileId) {
        findPerson = personMap.person;
      }
    });
    return findPerson;
  }
}
