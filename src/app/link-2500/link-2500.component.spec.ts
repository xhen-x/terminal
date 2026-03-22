import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link2500Component } from './link-2500.component';

describe('Link2500Component', () => {
  let component: Link2500Component;
  let fixture: ComponentFixture<Link2500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Link2500Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Link2500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
