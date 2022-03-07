import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompetitionsPage } from './pages/competitions/competitions.page';
import { InfoCardComponent } from './shared/info-card/info-card.component';
import { FormsModule } from '@angular/forms';
import { CompetitionDetailsPage } from './pages/competition-details/competition-details.page';
import { TeamDetailsPage } from './pages/team-details/team-details.page';

@NgModule({
  declarations: [AppComponent,CompetitionsPage,CompetitionDetailsPage, TeamDetailsPage, InfoCardComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
