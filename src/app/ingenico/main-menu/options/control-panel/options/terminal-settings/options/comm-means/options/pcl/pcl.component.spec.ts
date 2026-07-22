import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCLComponent } from './pcl.component';

describe('PCLComponent', () => {
  let component: PCLComponent;
  let fixture: ComponentFixture<PCLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PCLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
