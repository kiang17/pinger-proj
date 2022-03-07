import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { SoccerService } from './soccer.service';
import { mockCompetitions, mockCompetitionsResponseObj, mockTeamsInCompetitionResponseObj, mockTeams } from './soccer.service.mock';

describe('SoccerService', () => {
  let service: SoccerService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SoccerService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected competitons data when getCompetitions is called', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockCompetitionsResponseObj));
  
    service.getCompetitions().subscribe({
      next: response => {
        expect(response)
          .withContext('expected response')
          .toEqual(mockCompetitions);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(throwError(errorResponse));
  
    service.getCompetitions().subscribe({
      next: heroes => done.fail('expected an error, not competition data'),
      error: error  => {
        console.log(error)
        expect(error).toBe('test 404 error');
        done();
      }
    });
  });

  it('should expected competiton data when getCompetitionDetails is called', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockTeamsInCompetitionResponseObj));
  
    service.getCompetitionDetails('1').subscribe({
      next: response => {
        expect(response)
          .withContext('expected response')
          .toEqual(mockTeamsInCompetitionResponseObj);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should expected competiton data when getTeamDetails is called', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockTeams[0]));
  
    service.getTeamDetails('1').subscribe({
      next: response => {
        expect(response)
          .withContext('expected response')
          .toEqual(mockTeams[0]);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
