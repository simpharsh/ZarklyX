import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSection } from './black-section';

describe('BlackSection', () => {
  let component: BlackSection;
  let fixture: ComponentFixture<BlackSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackSection],
    }).compileComponents();

    fixture = TestBed.createComponent(BlackSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
