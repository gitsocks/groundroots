import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBoxItemComponent } from './local-box-item.component';

describe('LocalBoxItemComponent', () => {
  let component: LocalBoxItemComponent;
  let fixture: ComponentFixture<LocalBoxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalBoxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
