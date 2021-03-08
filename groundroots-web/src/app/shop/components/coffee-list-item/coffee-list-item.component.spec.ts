import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListItemComponent } from './coffee-list-item.component';

describe('CoffeeListItemComponent', () => {
  let component: CoffeeListItemComponent;
  let fixture: ComponentFixture<CoffeeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
