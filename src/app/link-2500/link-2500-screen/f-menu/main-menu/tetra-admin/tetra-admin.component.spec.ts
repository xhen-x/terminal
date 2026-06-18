import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetraAdminComponent } from './tetra-admin.component';

describe('TetraAdminComponent', () => {
  let component: TetraAdminComponent;
  let fixture: ComponentFixture<TetraAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetraAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
