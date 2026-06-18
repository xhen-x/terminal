import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAVDEVComponent } from './cav-dev.component';

describe('CAVDEVComponent', () => {
  let component: CAVDEVComponent;
  let fixture: ComponentFixture<CAVDEVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CAVDEVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAVDEVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
