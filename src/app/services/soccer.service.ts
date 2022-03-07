import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Competition, CompetitionsResponseObj, Team, TeamsInCompetitionResponseObj } from './data-types.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {
  apiUrl: string = 'https://api.football-data.org/v2'
  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]> { // can we filter beyond the api given options?  not sure 
    return this.http.get(
      `${this.apiUrl}/competitions`,
      {
        headers: { 'X-Auth-Token': environment.accessToken, 'X-Response-Control': 'full' },
        params: { plan: 'TIER_ONE' } // free tier at api.football-data.org
      }
    )
      .pipe(
        map((response: CompetitionsResponseObj) => response.competitions),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error);
        })
      )
  }

  getCompetitionDetails(competitionId: string): Observable<TeamsInCompetitionResponseObj> { // can we filter beyond the api given options?  not sure 
    return this.http.get(
      `${this.apiUrl}/competitions/${competitionId}/teams`,
      { headers: { 'X-Auth-Token': environment.accessToken } }
    )
      .pipe(
        map((response: TeamsInCompetitionResponseObj) => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error);
        })
      )
  }

  getTeamDetails(teamId: string): Observable<Team> {
    return this.http.get(
      `${this.apiUrl}/teams/${teamId}`,
      { headers: { 'X-Auth-Token': environment.accessToken } }
    )
      .pipe(
        map((response: Team) => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error);
        })
      )
  }
}
