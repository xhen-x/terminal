import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalInfoComponent } from './terminal-info.component';

describe('TerminalInfoComponent', () => {
  let component: TerminalInfoComponent;
  let fixture: ComponentFixture<TerminalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
