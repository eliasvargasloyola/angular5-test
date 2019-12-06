import {Component, OnInit} from '@angular/core';
import {Person} from '../domain/person';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../services/profile.service';
import {Skills} from '../domain/skills';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  profile: Person;
  amount: number;
  personId: string;


  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _serviceProfile: ProfileService) {
    this.profile = new Person('', '', '', '', false, '', [], 0, '', 0, '', '');
  }

  ngOnInit() {
    this._route.params.forEach(params => {
      this.personId = params['personId'];
    });
    this.getProfileById();
  }

  volver() {
    this._router.navigate(['/home']);
  }

  defecto() {
    this._router.navigate(['/person', '123']);
  }

  getProfileById() {
    this._serviceProfile.getProfileById(this.personId).subscribe(success => {
      Object.assign(this.profile, success);
    }, error => {
      console.log(error);
    });
  }

}
