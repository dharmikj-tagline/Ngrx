import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadInternationalTeam } from '../../state-multi/state-multi.action';
import { selectAllInternationalTeams } from '../../state-multi/state-multi.selector';
import { setLoadingSpinner } from 'src/app/components/shared/state/shared.action';

@Component({
  selector: 'app-multiple-entity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiple-entity.component.html',
  styleUrls: ['./multiple-entity.component.scss']
})
export class MultipleEntityComponent {

  private store = inject(Store);
  teamList$!: Observable<any>

  ngOnInit() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loadInternationalTeam());
    this.teamList$ = this.store.select(selectAllInternationalTeams);
  }
}
