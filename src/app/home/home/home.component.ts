import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homePersonId: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
  }

  getProfileByID(personId: string) {
    this._router.navigate(['/person', personId]);
  }

}
