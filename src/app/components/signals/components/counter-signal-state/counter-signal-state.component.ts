import { ChangeDetectionStrategy, Component, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patchState, signalState } from '@ngrx/signals';


interface MyState {
  count: number;
}

@Component({
  selector: 'app-counter-signal-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-signal-state.component.html',
  styleUrls: ['./counter-signal-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterSignalStateComponent {

  public state = signalState<MyState>({
    count: 0
  });
  // patchState used to update state

  public increase() {
    patchState(this.state, (state: MyState) => ({ ...state, count: state.count + 1 }));
  }

  public decrease() {
    patchState(this.state, (state: MyState) => ({ ...state, count: state.count - 1 }));
  }
}
