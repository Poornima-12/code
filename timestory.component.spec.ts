import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestoryComponent } from './timestory.component';

describe('TimestoryComponent', () => {
  let component: TimestoryComponent;
  let fixture: ComponentFixture<TimestoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
