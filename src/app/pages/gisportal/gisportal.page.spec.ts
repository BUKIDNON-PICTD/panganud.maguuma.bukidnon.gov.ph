import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GisportalPage } from './gisportal.page';

describe('GisportalPage', () => {
  let component: GisportalPage;
  let fixture: ComponentFixture<GisportalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GisportalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GisportalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
