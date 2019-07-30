import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgeoPage } from './testgeo.page';

describe('TestgeoPage', () => {
  let component: TestgeoPage;
  let fixture: ComponentFixture<TestgeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestgeoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
