import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapiComponent } from './viewapi.component';

describe('ViewapiComponent', () => {
  let component: ViewapiComponent;
  let fixture: ComponentFixture<ViewapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
