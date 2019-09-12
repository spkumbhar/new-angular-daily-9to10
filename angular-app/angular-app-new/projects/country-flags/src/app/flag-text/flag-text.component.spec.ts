import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagTextComponent } from './flag-text.component';

describe('FlagTextComponent', () => {
  let component: FlagTextComponent;
  let fixture: ComponentFixture<FlagTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
