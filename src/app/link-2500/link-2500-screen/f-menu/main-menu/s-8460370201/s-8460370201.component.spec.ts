import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S8460370201Component } from './s-8460370201.component';

describe('S8460370201Component', () => {
  let component: S8460370201Component;
  let fixture: ComponentFixture<S8460370201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S8460370201Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S8460370201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
