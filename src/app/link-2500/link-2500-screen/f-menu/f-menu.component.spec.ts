import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMenuComponent } from './F-menu.component';

describe('FMenuComponent', () => {
  let component: FMenuComponent;
  let fixture: ComponentFixture<FMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
