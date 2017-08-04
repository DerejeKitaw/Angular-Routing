import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { HousingComponent } from './housing/housing.component';
import { PersonalComponent } from './personal/personal.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { ResumesComponent } from './resumes/resumes.component';
import { NavComponent } from './core/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommunityComponent,
    HousingComponent,
    PersonalComponent,
    ForSaleComponent,
    JobsComponent,
    ServicesComponent,
    ResumesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
