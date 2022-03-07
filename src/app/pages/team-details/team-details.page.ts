import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Observable } from 'rxjs';
import { SoccerService } from '../../services/soccer.service';
import { Team } from '../../services/data-types.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit,OnChanges {
  teamDetails$ = new Observable<Team>()
  teamId = ''

  constructor(
    private soccerService: SoccerService, 
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() { 
    this.teamId = this.route.snapshot.paramMap.get('id')
    this.fetchTeamData()
  }

  ngOnChanges(){}

  fetchTeamData() {
    this.teamDetails$ = this.soccerService.getTeamDetails(this.teamId);
  }

  navBack(){
    this.location.back()
  }
}
