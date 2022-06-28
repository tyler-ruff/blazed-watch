import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnknownComponent } from './unknown/unknown.component';
import { UploadComponent } from './upload/upload.component';
import { VideosComponent } from './videos/videos.component';
import { UserdashComponent } from './userdash/userdash.component';

import { AuthGuard } from '@auth0/auth0-angular';
import { AccountComponent } from './account/account.component';
import { BrowseComponent } from './browse/browse.component';
import { SingleComponent } from './single/single.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'video', component: SingleComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'userdash', component: UserdashComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'account', component: AccountComponent },
      { path: '**',   redirectTo: '/dashboard/userdash', pathMatch: 'full' },
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
