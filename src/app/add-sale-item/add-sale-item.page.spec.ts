import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleItemPage } from './add-sale-item.page';

describe('AddSaleItemPage', () => {
  let component: AddSaleItemPage;
  let fixture: ComponentFixture<AddSaleItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSaleItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
