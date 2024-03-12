import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterSignalStateComponent } from '../counter-signal-state/counter-signal-state.component';
import { CounterSignalStoreComponent } from '../counter-signal-store/counter-signal-store.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, CounterSignalStateComponent, CounterSignalStoreComponent],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

}
