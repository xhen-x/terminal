import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WICComponent } from './wic.component';

describe('WICComponent', () => {
  let component: WICComponent;
  let fixture: ComponentFixture<WICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WICComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
