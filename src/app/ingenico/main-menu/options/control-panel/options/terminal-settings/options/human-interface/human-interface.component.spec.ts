import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanInterfaceComponent } from './human-interface.component';

describe('HumanInterfaceComponent', () => {
  let component: HumanInterfaceComponent;
  let fixture: ComponentFixture<HumanInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
