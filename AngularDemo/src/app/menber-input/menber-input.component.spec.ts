import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenberInputComponent } from './menber-input.component';

describe('MenberInputComponent', () => {
  let component: MenberInputComponent;
  let fixture: ComponentFixture<MenberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
