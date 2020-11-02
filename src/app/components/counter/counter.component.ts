import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as CounterActions from './store/counter.actions';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.less']
})

export class CounterComponent implements OnInit, OnDestroy {

    count$: Subscription;
    count: number;

    constructor(private store: Store<fromApp.AppState>) { }

    ngOnInit() {
        this.count$ = this.store.select('counter').subscribe(value => this.count = value.count);
    }

    increase() {
        // Increase count
        this.store.dispatch(new CounterActions.IncreaseCount());
    }

    decrease() {
        // Decrease count
        this.store.dispatch(new CounterActions.DecreaseCount());
    }

    reset() {
        // Reset count
        this.store.dispatch(new CounterActions.ResetCount());
    }

    ngOnDestroy(): void {
        this.count$.unsubscribe();
    }
}
