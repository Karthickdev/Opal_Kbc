import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanItemPage } from './scan-item.page';

describe('ScanItemPage', () => {
  let component: ScanItemPage;
  let fixture: ComponentFixture<ScanItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
