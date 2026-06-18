import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDAComponent } from './tda.component';

describe('TDAComponent', () => {
  let component: TDAComponent;
  let fixture: ComponentFixture<TDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
