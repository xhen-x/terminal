import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMgrSrvcComponent } from './form-mgr-srvc.component';

describe('FormMgrSrvcComponent', () => {
  let component: FormMgrSrvcComponent;
  let fixture: ComponentFixture<FormMgrSrvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMgrSrvcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMgrSrvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
