import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule, appRoutingProviders} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home/home.component';
import {PhonePipe} from './pipes/phone.pipe';
import {FormProfileComponent} from './form-profile/form-profile.component';
import {TemplatesComponent} from './templates/templates.component';
import {HttpProfileService} from './services/http-profile.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {CustomHttpInterceptorService} from './interceptors/custom-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    PhonePipe,
    FormProfileComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, HttpClient, HttpProfileService, {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
