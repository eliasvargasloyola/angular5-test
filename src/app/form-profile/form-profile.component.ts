import {Component, OnInit} from '@angular/core';
import {Person} from '../domain/person';
import {ProfileService} from '../services/profile.service';
import {PersonMap} from '../domain/person-map';
import {NgForm} from '@angular/forms';
import {HttpProfileService} from '../services/http-profile.service';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.css'],
  providers: [ProfileService, HttpProfileService]
})
export class FormProfileComponent implements OnInit {

  public newPerson: Person;
  public posts;

  constructor(public _profileService: ProfileService,
              public _httpProfile: HttpProfileService) {

    this.newPerson = new Person('', '', '', '', false, '', [], 0, '', 0, '', '');
  }

  ngOnInit() {
    this.getPosts();
  }

  saveProfile(theForm: NgForm) {
    this._profileService.profilesList.push(new PersonMap('369', Object.assign({}, this.newPerson)));
    console.log('Creado ! ');
    theForm.reset();
  }

  getPosts() {
    this._httpProfile.getProfileById().subscribe(success => {
      this.posts = success;
    }, error => {
      console.log(error);
    });
  }

}
