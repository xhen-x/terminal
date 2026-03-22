import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link2500ScreenComponent } from './link-2500-screen.component';

describe('Link2500ScreenComponent', () => {
  let component: Link2500ScreenComponent;
  let fixture: ComponentFixture<Link2500ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Link2500ScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Link2500ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
