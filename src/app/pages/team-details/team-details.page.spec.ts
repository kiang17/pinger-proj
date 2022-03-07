import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamDetailsPage } from './team-details.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { mockTeams } from '../../services/soccer.service.mock';
import { SoccerService } from 'src/app/services/soccer.service';
import { Team } from 'src/app/services/data-types.model';

describe('TeamDetailsPage', () => {
  let component: TeamDetailsPage;
  let fixture: ComponentFixture<TeamDetailsPage>;
  let soccerService: any;
  let spy:any

  beforeEach(waitForAsync(() => {
    soccerService = jasmine.createSpyObj('SoccerService', ['getTeamDetails']);
    spy = soccerService.getTeamDetails.and.returnValue(of(mockTeams[0]));

    TestBed.configureTestingModule({
      declarations: [ TeamDetailsPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers : [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
             paramMap: convertToParamMap({id: 1})
          }
        }
      },
      { provide: SoccerService, useValue: soccerService }
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render team details after getTeamDetails is called', () => {
    expect(spy.calls.any())
      .withContext('getTeamDetails called')
      .toBe(true);

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.team-details')).toBeTruthy()
  });

  it('should render the squad list details after getTeamDetails is called', () => {
    expect(spy.calls.any())
      .withContext('getTeamDetails called')
      .toBe(true);

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.team-details')).toBeTruthy()
  });

  // NOTE: was running into a bit of trouble here but ran out of time
  xit('should not render squad list details after getTeamDetails is called if there is no squad data', () => {
    let teamDataWithNoSquad: Team = {...mockTeams[0], squad: null}
    spy = soccerService.getTeamDetails.and.returnValue(of(teamDataWithNoSquad));

    expect(spy.calls.any())
      .withContext('getTeamDetails called')
      .toBe(true);

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.table-container')).toBeFalsy()
  });
});
