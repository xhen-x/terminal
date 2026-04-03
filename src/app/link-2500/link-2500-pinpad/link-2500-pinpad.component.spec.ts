import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link2500PinpadComponent } from './link-2500-pinpad.component';

describe('Link2500PinpadComponent', () => {
  let component: Link2500PinpadComponent;
  let fixture: ComponentFixture<Link2500PinpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Link2500PinpadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Link2500PinpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
