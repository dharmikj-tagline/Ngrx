import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, CounterOutputComponent, CounterButtonsComponent, CustomCounterComponent],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {

}
