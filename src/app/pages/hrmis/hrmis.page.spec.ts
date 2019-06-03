import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmisPage } from './hrmis.page';

describe('HrmisPage', () => {
  let component: HrmisPage;
  let fixture: ComponentFixture<HrmisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
