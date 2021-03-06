import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumboardAppComponent } from './scrumboard-app.component';

describe('ScrumboardAppComponent', () => {
  let component: ScrumboardAppComponent;
  let fixture: ComponentFixture<ScrumboardAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumboardAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumboardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
