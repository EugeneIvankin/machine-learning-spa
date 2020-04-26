import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingFormComponent } from './sing-form.component';

describe('SingFormComponent', () => {
  let component: SingFormComponent;
  let fixture: ComponentFixture<SingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
