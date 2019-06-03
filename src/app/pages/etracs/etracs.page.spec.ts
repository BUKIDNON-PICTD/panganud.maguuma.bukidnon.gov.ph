import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtracsPage } from './etracs.page';

describe('EtracsPage', () => {
  let component: EtracsPage;
  let fixture: ComponentFixture<EtracsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtracsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtracsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
