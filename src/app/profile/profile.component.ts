import {Component, OnInit} from '@angular/core';
import {Person} from "../domain/person";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {ProfileService} from "../services/profile.service";

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
  }

  ngOnInit() {
    this._route.params.forEach(params => {
      this.personId = params['personId'];
    });
    this.profile = this._serviceProfile.getProfileById(this.personId);
  }

  volver() {
    this._router.navigate(['/home']);
  }

  defecto() {
    this._router.navigate(['/person', '123']);
  }

}
