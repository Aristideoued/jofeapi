import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UabComponent } from './uab.component';

describe('UabComponent', () => {
  let component: UabComponent;
  let fixture: ComponentFixture<UabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
