import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGen } from './next-gen';

describe('NextGen', () => {
  let component: NextGen;
  let fixture: ComponentFixture<NextGen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextGen],
    }).compileComponents();

    fixture = TestBed.createComponent(NextGen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
