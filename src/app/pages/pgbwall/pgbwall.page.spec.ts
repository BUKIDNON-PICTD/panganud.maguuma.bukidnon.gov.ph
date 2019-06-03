import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgbwallPage } from './pgbwall.page';

describe('PgbwallPage', () => {
  let component: PgbwallPage;
  let fixture: ComponentFixture<PgbwallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgbwallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgbwallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
