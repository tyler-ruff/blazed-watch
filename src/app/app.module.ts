import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { SingleComponent } from './single/single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { VideosComponent } from './videos/videos.component';
import { UnknownComponent } from './unknown/unknown.component';
import { SearchComponent } from './search/search.component';
import { UserdashComponent } from './userdash/userdash.component';
import { LazyLoadDirective } from './lazyload.directive';
import { LoadingComponent } from './loading/loading.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UploadComponent,
    SingleComponent,
    DashboardComponent,
    AccountComponent,
    VideosComponent,
    UnknownComponent,
    SearchComponent,
    UserdashComponent,
    LoadingComponent,
    BrowseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'blazed.us.auth0.com',
      clientId: 'wyKjKTRlP070gqFIRUzCoaYjsfQ1ELnS'
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
