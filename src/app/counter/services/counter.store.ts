import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

const COUNTER_CHANGE_STORAGE_KEY = 'counterChangeAmount';

export const CounterStore = signalStore(
  withState({
    counter: 0,
    counterChangeAmount: parseInt(
      localStorage.getItem(COUNTER_CHANGE_STORAGE_KEY) ?? '1',
    ),
  }),
  withMethods((store) => {
    return {
      increment: () =>
        patchState(store, {
          counter: store.counter() + store.counterChangeAmount(),
        }),
      decrement: () => {
        if (store.counter() > 0) {
          patchState(store, {
            counter: store.counter() - store.counterChangeAmount(),
          });
        }
      },
      setCounterChangeAmount: (changeAmount: string) => {
        localStorage.setItem(COUNTER_CHANGE_STORAGE_KEY, changeAmount);
        patchState(store, { counterChangeAmount: parseInt(changeAmount) });
      },
    };
  }),
  withComputed((store) => {
    return {
      canDecrement: computed(
        () => store.counter() >= store.counterChangeAmount(),
      ),
    };
  }),
);
