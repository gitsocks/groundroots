import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProductOptionComponent } from './remove-product-option.component';

describe('RemoveProductOptionComponent', () => {
  let component: RemoveProductOptionComponent;
  let fixture: ComponentFixture<RemoveProductOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveProductOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProductOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
