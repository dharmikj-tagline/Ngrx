import { computed } from '@angular/core';
import { signalStore, patchState, withComputed, withState, withMethods, withHooks } from '@ngrx/signals';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export const CounterStore = signalStore(
    withState({ count: 0 }),
    withComputed(({ count }) => ({
        doubleCount: computed(() => count() * 2),
    })),
    withMethods(({ count, ...store }) => ({
        increase() {
            patchState(store, { count: count() + 1 });
        },
        decrease() {
            patchState(store, { count: count() - 1 });
        }
    })),
    withHooks({
        onInit({ increase }) {
            interval(1000)
                .pipe(takeUntilDestroyed())
                .subscribe(() => increase());
        },
        onDestroy({ count }) {
            console.log('Count Signal Destroy', count());
        }
    })
);