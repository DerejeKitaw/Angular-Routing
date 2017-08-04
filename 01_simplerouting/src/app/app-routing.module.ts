import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { CommunityComponent } from './community/community.component';
import { ResumesComponent } from './resumes/resumes.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { PersonalComponent } from './personal/personal.component';
import { HousingComponent } from './housing/housing.component';
// import { NavComponent } from './core/nav/nav.component';

const routes: Routes = [
  
    {path: 'home', component: HomeComponent,children: []} ,
    {path: 'community', loadChildren: 'app/community/community.module#CommunityModule'} ,
    {path: 'housing', component: HousingComponent} ,
    {path: 'personal', component: PersonalComponent} ,
    {path: 'forSale', component: ForSaleComponent} ,
    {path: 'jobs', component: JobsComponent} ,
    {path: 'services', component: ServicesComponent} ,
    {path: 'resumes', component: ResumesComponent} ,

    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 