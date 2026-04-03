import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedIntegrations } from './trusted-integrations';

describe('TrustedIntegrations', () => {
  let component: TrustedIntegrations;
  let fixture: ComponentFixture<TrustedIntegrations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedIntegrations],
    }).compileComponents();

    fixture = TestBed.createComponent(TrustedIntegrations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
