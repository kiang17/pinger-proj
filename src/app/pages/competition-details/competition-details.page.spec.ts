import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CompetitionDetailsPage } from './competition-details.page';
import { mockTeamsInCompetitionResponseObj } from '../../services/soccer.service.mock';
import { of } from 'rxjs';
import { SoccerService } from 'src/app/services/soccer.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompetitionDetailsPage', () => {
  let component: CompetitionDetailsPage;
  let fixture: ComponentFixture<CompetitionDetailsPage>;
  let spy:any
  let nativeEl: any;

  beforeEach(waitForAsync(() => {
    const soccerService = jasmine.createSpyObj('SoccerService', ['getCompetitionDetails']);
    spy = soccerService.getCompetitionDetails.and.returnValue(of(mockTeamsInCompetitionResponseObj));

    TestBed.configureTestingModule({
      declarations: [ CompetitionDetailsPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers : [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: convertToParamMap({ id: 1 })
          }
        }
      },
      { provide: SoccerService, useValue: soccerService }
    ] 
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeEl = fixture.debugElement.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render teams after getCompetitionDetails is called', () => {
    expect(spy.calls.any())
      .withContext('getCompetitionDetails called')
      .toBe(true);

    for(let i = 0; i< mockTeamsInCompetitionResponseObj.teams.length;i++){
      expect(nativeEl.querySelectorAll('app-info-card')[i]).toBeTruthy() // NOTE: just checking if the proper amount exist in DOM, could be more robust 
    }
  });
});
