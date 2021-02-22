import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBeansComponent } from './coffee-beans.component';

describe('CoffeeBeansComponent', () => {
  let component: CoffeeBeansComponent;
  let fixture: ComponentFixture<CoffeeBeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeBeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeBeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
