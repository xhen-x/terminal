import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommMeansComponent } from './comm-means.component';

describe('CommMeansComponent', () => {
  let component: CommMeansComponent;
  let fixture: ComponentFixture<CommMeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommMeansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommMeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
