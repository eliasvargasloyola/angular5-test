import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  carrera: string;
  estudio: string;
  titulado: boolean;
  color: string;
  skills: Array<string>;

  constructor() {
    this.carrera = 'Ingenierio en Informatica';
    this.estudio = 'Soy Estudiante de Ingenieria en Informatica';
    this.titulado = true;
    this.color = 'red';
    this.skills = ['Java', 'SpringBoot', 'NodeJS', 'Angular5']
  }

  ngOnInit() {
  }

}
