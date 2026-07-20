import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsReportsComponent } from './apps-reports.component';

describe('AppsReportsComponent', () => {
  let component: AppsReportsComponent;
  let fixture: ComponentFixture<AppsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
