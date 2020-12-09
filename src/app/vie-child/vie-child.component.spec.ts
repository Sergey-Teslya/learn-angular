import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieChildComponent } from './vie-child.component';

describe('VieChildComponent', () => {
  let component: VieChildComponent;
  let fixture: ComponentFixture<VieChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
