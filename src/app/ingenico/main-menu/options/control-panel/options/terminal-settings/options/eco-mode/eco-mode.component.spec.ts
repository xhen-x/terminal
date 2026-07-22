import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoModeComponent } from './eco-mode.component';

describe('EcoModeComponent', () => {
  let component: EcoModeComponent;
  let fixture: ComponentFixture<EcoModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
