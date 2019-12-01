import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Person;
  amount:number;

  constructor() {
  }

  ngOnInit() {
    this.profile = new Person('Ingenieria en Informatica', 'Estudiante de Ingenieria en Informatica', true, 'red', ['Java', 'SpringBoot'], 200, 'USD', 3);
  }

}
