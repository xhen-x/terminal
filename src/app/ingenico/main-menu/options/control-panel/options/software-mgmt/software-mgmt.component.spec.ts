import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareMgmtComponent } from './software-mgmt.component';

describe('SoftwareMgmtComponent', () => {
  let component: SoftwareMgmtComponent;
  let fixture: ComponentFixture<SoftwareMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareMgmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
