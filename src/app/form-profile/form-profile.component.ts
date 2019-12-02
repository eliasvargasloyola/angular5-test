import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";
import {ProfileService} from "../services/profile.service";
import {PersonMap} from "../domain/person-map";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.css'],
  providers: [ProfileService]
})
export class FormProfileComponent implements OnInit {

  public newPerson: Person;

  constructor(public _profileService:ProfileService) {

    this.newPerson = new Person("","","","",false,"",[],0,"",0,"","");
  }

  ngOnInit() {
  }

  saveProfile(theForm:NgForm){
    this._profileService.profilesList.push(new PersonMap('369',  Object.assign({}, this.newPerson)));
    console.log("Creado ! " + this._profileService.profilesList.toString());
    theForm.reset();
  }

}
