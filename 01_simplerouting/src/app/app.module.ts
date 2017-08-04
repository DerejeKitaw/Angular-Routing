import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { CommunityComponent } from './community/community.component';
import { HousingComponent } from './housing/housing.component';
import { PersonalComponent } from './personal/personal.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { ResumesComponent } from './resumes/resumes.component';

import { CommonModule } from '@angular/common';
import { CommunityModule } from './community/community.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CommunityComponent,
    HousingComponent,
    PersonalComponent,
    ForSaleComponent,
    JobsComponent,
    ServicesComponent,
    ResumesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CommunityModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
