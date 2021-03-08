import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBoxComponent } from './local-box.component';

describe('LocalBoxComponent', () => {
  let component: LocalBoxComponent;
  let fixture: ComponentFixture<LocalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
