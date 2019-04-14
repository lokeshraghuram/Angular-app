import { AskusanythingComponent } from './askusanything/askusanything.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HappeningsComponent } from './happenings/happenings.component';
import { AdmissionsComponent } from './admissions/admissions.component';


const routes: Routes = [
  {
    path: 'about-us',
    component: AboutusComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'admissions',
      component: AdmissionsComponent
  },
  {
      path: 'askusanything',
      component: AskusanythingComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  } /** Change it to page not found component */
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } /** for debugging purpose. Remove later */
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
