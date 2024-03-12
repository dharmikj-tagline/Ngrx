import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getCounter } from '../state/counter.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})

export class CounterOutputComponent {

  counter!: number;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getCounter).subscribe((res) => {
      this.counter = res;
    });
  }
}
