import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Skills} from '../domain/skills';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {

  public title: string;
  public newSkill: string;

  @Input() skills: Array<Skills>;
  @Input('name') nombre: string;
  @Output() newSkills = new EventEmitter();

  constructor() {
    this.newSkill = '';
    this.title = 'Skills';
    this.skills = [];
    this.nombre = '';
  }

  ngOnInit() {
  }

  addSkill(event) {
    this.newSkills.emit({newSkill: this.newSkill});
    this.newSkill = '';
  }

}
