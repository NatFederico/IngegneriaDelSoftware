import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPwdChange } from './request-pwd-change';

describe('ChangePwdComponent', () => {
  let component: RequestPwdChange;
  let fixture: ComponentFixture<RequestPwdChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPwdChange ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPwdChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
