import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiRiskAnalysisComponent } from './ai-risk-analysis.component';

describe('AiRiskAnalysisComponent', () => {
  let component: AiRiskAnalysisComponent;
  let fixture: ComponentFixture<AiRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
