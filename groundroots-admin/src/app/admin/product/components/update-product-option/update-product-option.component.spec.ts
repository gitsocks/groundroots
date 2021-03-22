import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductOptionComponent } from './update-product-option.component';

describe('UpdateProductOptionComponent', () => {
  let component: UpdateProductOptionComponent;
  let fixture: ComponentFixture<UpdateProductOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
