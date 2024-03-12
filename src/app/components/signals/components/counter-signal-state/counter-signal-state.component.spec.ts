import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSignalStateComponent } from './counter-signal-state.component';

describe('CounterSignalStateComponent', () => {
  let component: CounterSignalStateComponent;
  let fixture: ComponentFixture<CounterSignalStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterSignalStateComponent]
    });
    fixture = TestBed.createComponent(CounterSignalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
