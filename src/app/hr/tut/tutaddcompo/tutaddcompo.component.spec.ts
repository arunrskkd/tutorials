import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutaddcompoComponent } from './tutaddcompo.component';

describe('TutaddcompoComponent', () => {
  let component: TutaddcompoComponent;
  let fixture: ComponentFixture<TutaddcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutaddcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutaddcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
