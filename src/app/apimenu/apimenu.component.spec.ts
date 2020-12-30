import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimenuComponent } from './apimenu.component';

describe('ApimenuComponent', () => {
  let component: ApimenuComponent;
  let fixture: ComponentFixture<ApimenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApimenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
