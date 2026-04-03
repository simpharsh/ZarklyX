import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSolutions } from './expert-solutions';

describe('ExpertSolutions', () => {
  let component: ExpertSolutions;
  let fixture: ComponentFixture<ExpertSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertSolutions],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertSolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
