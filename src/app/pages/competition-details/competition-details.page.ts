import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SoccerService } from '../../services/soccer.service';
import { TeamsInCompetitionResponseObj } from '../../services/data-types.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.page.html',
  styleUrls: ['./competition-details.page.scss'],
})
export class CompetitionDetailsPage implements OnInit, OnDestroy {
  competitionDetails$ = new Observable<TeamsInCompetitionResponseObj>()
  competitionDetailsSub$ = new Subscription();
  competitionYear: number;
  competitionId: string;

  constructor(
    private soccerService: SoccerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.competitionId = this.route.snapshot.paramMap.get('id')
    this.fetchCompetitionDetails()
    this.competitionDetailsSub$ = this.competitionDetails$
      .subscribe((competitionDetails: TeamsInCompetitionResponseObj) => {
        if(competitionDetails && competitionDetails.season){
          let date = new Date(competitionDetails.season.startDate)
          let year = date.getFullYear()
          this.competitionYear = year;
        }
      })
  }

  ngOnDestroy() {
    this.competitionDetailsSub$.unsubscribe();
  }

  fetchCompetitionDetails() {
    this.competitionDetails$ = this.soccerService.getCompetitionDetails(this.competitionId);
  }

  navBack() {
    this.location.back()
  }
}
