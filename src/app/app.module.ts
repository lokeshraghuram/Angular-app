import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { MatIconModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';



import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HappeningsComponent } from './happenings/happenings.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FlexwidgetComponent } from './flexwidget/flexwidget.component';
import { FixedwidgetComponent } from './fixedwidget/fixedwidget.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AskusanythingComponent } from './askusanything/askusanything.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    TeamComponent,
    HappeningsComponent,
    AchievementsComponent,
    GalleryComponent,
    FlexwidgetComponent,
    FixedwidgetComponent,
    AdmissionsComponent,
    AskusanythingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
