import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderComponent } from './components/shared/components/header/header.component';
import { SpinnerComponent } from './components/shared/components/spinner/spinner.component';
import { getErrorMessage, getLoading } from './components/shared/state/shared.selector';
import { AppState } from './components/store/app.state';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public showLoading !: Observable<boolean>;
  public errorMsg !: Observable<string>;
  private store = inject(Store<AppState>);

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.errorMsg = this.store.select(getErrorMessage);
  }
}
