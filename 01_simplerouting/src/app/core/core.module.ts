import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommunityModule } from '../community/community.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CommunityModule,

  ],
  declarations: [NavComponent]
  ,
  exports:[
    NavComponent
  ]
})
export class CoreModule { }
