import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumboardFileComponent } from './scrumboard-file.component';

describe('ScrumboardFileComponent', () => {
  let component: ScrumboardFileComponent;
  let fixture: ComponentFixture<ScrumboardFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumboardFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumboardFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
