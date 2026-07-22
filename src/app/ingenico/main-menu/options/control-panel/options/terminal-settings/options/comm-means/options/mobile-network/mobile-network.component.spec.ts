import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNetworkComponent } from './mobile-network.component';

describe('MobileNetworkComponent', () => {
  let component: MobileNetworkComponent;
  let fixture: ComponentFixture<MobileNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNetworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
