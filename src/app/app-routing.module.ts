import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompetitionDetailsPage } from './pages/competition-details/competition-details.page';
import { CompetitionsPage } from './pages/competitions/competitions.page';
import { TeamDetailsPage } from './pages/team-details/team-details.page';

const routes: Routes = [
  // NOTE: didn't feel the need for feature/shared modules due to the small size of the app / time restraint
  // {
  //   path: 'competitions',
  //   loadChildren: () => import('./competitions/competitions.module').then( m => m.CompetitionsPageModule)
  // },
  {
    path: '',
    redirectTo: 'competitions',
    pathMatch: 'full'
  },
  {
    path: 'competitions',
    component: CompetitionsPage
  },
  {
    path: 'competitions/:id',
    component: CompetitionDetailsPage
  },
  {
    path: 'teams/:id',
    component: TeamDetailsPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
