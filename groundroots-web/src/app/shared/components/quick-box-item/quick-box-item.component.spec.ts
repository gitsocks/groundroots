import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBoxItemComponent } from './quick-box-item.component';

describe('QuickBoxItemComponent', () => {
  let component: QuickBoxItemComponent;
  let fixture: ComponentFixture<QuickBoxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBoxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
