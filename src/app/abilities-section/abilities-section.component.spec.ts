import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesSectionComponent } from './abilities-section.component';

describe('AbilitiesSectionComponent', () => {
  let component: AbilitiesSectionComponent;
  let fixture: ComponentFixture<AbilitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitiesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
