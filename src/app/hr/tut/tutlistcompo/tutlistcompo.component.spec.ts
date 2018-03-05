import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutlistcompoComponent } from './tutlistcompo.component';

describe('TutlistcompoComponent', () => {
  let component: TutlistcompoComponent;
  let fixture: ComponentFixture<TutlistcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutlistcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutlistcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
