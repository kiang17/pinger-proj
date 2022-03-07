import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Competition } from 'src/app/services/data-types.model';
import { SoccerService } from '../../services/soccer.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage implements OnInit {
  competitions$ = new Observable<any>()
  competitionsSub$ = new Subscription();
  competitionsByYear: {[year: number]: Competition[]} = {};
  options = [];
  currentYear: number = undefined;

  constructor(private soccerService: SoccerService) { }

  ngOnInit() {
    this.fetchCompetitionsData()
    this.competitionsSub$ = this.competitions$.subscribe((competitions: Competition[]) => {
      this.populateCompetitionsByYear(competitions);
      this.populateOptions();
      // NOTE: todo would have been handling error
      //  with "Having trouble getting data" state
    })
  }

  ngOnDestroy(){
    this.competitionsSub$.unsubscribe();
  }

  fetchCompetitionsData() {
    this.competitions$ = this.soccerService.getCompetitions();
  }

  updateSelectedSeason(option: number){
    this.currentYear = option;
  }

  populateCompetitionsByYear(competitions: Competition[]){
    for (let competition of competitions) {
      if (competition.currentSeason) {
        let date = new Date(competition.currentSeason.startDate)
        let year = date.getFullYear()
      if (this.competitionsByYear[year]) {
          this.competitionsByYear[year].push(competition)
        } else {
          this.competitionsByYear[year] = [competition]
        }
      }
    }
  }

  populateOptions(){
    this.options.push(...Object.keys(this.competitionsByYear))
  }
}
