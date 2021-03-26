import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.home h1').textContent).toContain('Enzo H. De la Sota');
  });

  it('should render subject', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.home p').textContent).toContain('CV Interactivo');
  });
});
