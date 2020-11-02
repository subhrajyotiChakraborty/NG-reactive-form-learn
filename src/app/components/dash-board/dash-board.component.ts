import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.less']
})
export class DashBoardComponent implements OnInit, OnDestroy {

  count$: Subscription;
  count: number;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.select('counter').subscribe(({ count }) => this.count = count);
  }

  ngOnDestroy(): void {
    this.count$.unsubscribe();
  }

}
