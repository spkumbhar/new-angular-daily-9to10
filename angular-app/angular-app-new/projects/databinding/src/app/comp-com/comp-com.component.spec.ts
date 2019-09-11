import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompComComponent } from './comp-com.component';

describe('CompComComponent', () => {
  let component: CompComComponent;
  let fixture: ComponentFixture<CompComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
