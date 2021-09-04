import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderActionComponent } from './slider-action.component';

describe('SliderActionComponent', () => {
  let component: SliderActionComponent;
  let fixture: ComponentFixture<SliderActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
