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
import { NavComponent } from './nav/nav.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { StringLengthPipe } from './stringlength.pipe';
import { GetMbPipe } from './getmb.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

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
    LoginComponent,
    NavComponent,
    StringLengthPipe,
    GetMbPipe,
    FavoritesComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
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
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
