import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBoxComponent } from './quick-box.component';

describe('QuickBoxComponent', () => {
  let component: QuickBoxComponent;
  let fixture: ComponentFixture<QuickBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
