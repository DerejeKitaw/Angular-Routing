import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NavComponent } from '../core/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    CommunityRoutingModule
  ],
  declarations: [
    CommunityComponent,
    ActivitiesComponent
  ]
})
export class CommunityModule { }
