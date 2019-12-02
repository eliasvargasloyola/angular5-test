import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home/home.component";
import {FormProfileComponent} from "./form-profile/form-profile.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'myprofile', component: ProfileComponent},
  {path: 'person/:personId', component: ProfileComponent},
  {path: 'person', component: FormProfileComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
