import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSAComponent } from './tsa.component';

describe('TSAComponent', () => {
  let component: TSAComponent;
  let fixture: ComponentFixture<TSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
