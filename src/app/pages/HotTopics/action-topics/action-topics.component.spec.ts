import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTopicsComponent } from './action-topics.component';

describe('ActionTopicsComponent', () => {
  let component: ActionTopicsComponent;
  let fixture: ComponentFixture<ActionTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
