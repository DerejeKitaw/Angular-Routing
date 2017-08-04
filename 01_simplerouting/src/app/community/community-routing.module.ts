import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
    {
    path: 'community',
    component: CommunityComponent,
    children: [
      {
        path: 'activities',
        component: ActivitiesComponent,
      },
      // {
      //   path: ':id',
      //   component: CharacterComponent,
      //   canDeactivate: [CanDeactivateGuard]
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }

export const routedComponents = [CommunityComponent, ActivitiesComponent];
