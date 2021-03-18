import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopSnackComponent } from './pop-snack.component';

describe('PopSnackComponent', () => {
  let component: PopSnackComponent;
  let fixture: ComponentFixture<PopSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
