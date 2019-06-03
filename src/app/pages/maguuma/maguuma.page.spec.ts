import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaguumaPage } from './maguuma.page';

describe('MaguumaPage', () => {
  let component: MaguumaPage;
  let fixture: ComponentFixture<MaguumaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaguumaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaguumaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
