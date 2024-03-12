import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSignalStoreComponent } from './counter-signal-store.component';

describe('CounterSignalStoreComponent', () => {
  let component: CounterSignalStoreComponent;
  let fixture: ComponentFixture<CounterSignalStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterSignalStoreComponent]
    });
    fixture = TestBed.createComponent(CounterSignalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
