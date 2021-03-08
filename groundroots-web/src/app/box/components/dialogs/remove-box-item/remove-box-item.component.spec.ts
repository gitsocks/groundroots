import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBoxItemComponent } from './remove-box-item.component';

describe('RemoveBoxItemComponent', () => {
  let component: RemoveBoxItemComponent;
  let fixture: ComponentFixture<RemoveBoxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBoxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
