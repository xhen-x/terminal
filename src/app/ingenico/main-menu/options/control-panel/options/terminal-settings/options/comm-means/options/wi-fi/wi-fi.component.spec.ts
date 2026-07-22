import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiFiComponent } from './wi-fi.component';

describe('WiFiComponent', () => {
  let component: WiFiComponent;
  let fixture: ComponentFixture<WiFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiFiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
