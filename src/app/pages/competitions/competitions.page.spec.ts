import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { Observable, of } from 'rxjs';

import { CompetitionsPage } from './competitions.page';
import { SoccerService } from '../../services/soccer.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { mockCompetitions } from '../../services/soccer.service.mock';

describe('CompetitionsPage', () => {
  let component: CompetitionsPage;
  let fixture: ComponentFixture<CompetitionsPage>;
  let spy: any;
  let nativeEl: any;


  beforeEach(waitForAsync(() => {
    const soccerService = jasmine.createSpyObj('SoccerService', ['getCompetitions']);
    spy = soccerService.getCompetitions.and.returnValue(of(mockCompetitions));

    TestBed.configureTestingModule({
      declarations: [CompetitionsPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:
        [{ provide: SoccerService, useValue: soccerService }]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeEl = fixture.debugElement.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display call to action if no option is selected', () => {
    expect(nativeEl.querySelector('.selection-call-to-action').innerText).toBe('Please select a season above');
  });

  it('should not display call to action if an option is selected', () => {
    let button = fixture.debugElement.nativeElement.querySelector('.select-option');
    button.click();
    fixture.detectChanges();
    expect(nativeEl.querySelector('.selection-call-to-action')).toBeFalsy();
  });

  it('should render competition components if an option is selected', () => {
    let button = fixture.debugElement.nativeElement.querySelector('.select-option');
    button.click();
    fixture.detectChanges();
    expect(nativeEl.querySelector('app-info-card')).toBeTruthy()
  });

  it('should not render competition components if no option is selected', () => {
    expect(nativeEl.querySelector('app-info-card')).toBeFalsy()
  });

  it('should correctly render selection options after getCompetitons is called', () => {
    expect(spy.calls.any())
      .withContext('getCompetitions called')
      .toBe(true);

    const compiled = fixture.debugElement.nativeElement;
    for(let i = 0; i< mockCompetitions.length;i++){
      expect(compiled.querySelectorAll('.select-option')[i].innerText).toBe(component.options[i]);
    }});
});
