import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerslistPage } from './farmerslist.page';

describe('FarmerslistPage', () => {
  let component: FarmerslistPage;
  let fixture: ComponentFixture<FarmerslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
