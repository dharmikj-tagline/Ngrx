import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { changeChennal, customCounter } from '../state/counter.actions';
import { getChennal } from '../state/counter.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent {

  plusVal !: string;
  chennal !: string;

  constructor(private store: Store<AppState>) {
    this.store.select(getChennal).subscribe((res) => {
      this.chennal = res;
    });
  }

  addPlus() {
    this.store.dispatch(customCounter({ value: +this.plusVal }));
  }

  modifyChennal() {
    this.store.dispatch(changeChennal())
  }
}
