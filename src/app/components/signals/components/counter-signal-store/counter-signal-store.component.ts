import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterStore } from '../../store/counter.store';

@Component({
  selector: 'app-counter-signal-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-signal-store.component.html',
  styleUrls: ['./counter-signal-store.component.scss'],
  providers: [CounterStore],
})
export class CounterSignalStoreComponent {

  public counterStore = inject(CounterStore);
}
