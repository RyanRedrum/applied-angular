import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="store.decrement()"
        [disabled]="!store.canDecrement()"
      >
        -
      </button>
      <span data-testid="current">{{ store.counter() }}</span>
      <button class="btn btn-primary" (click)="store.increment()">+</button>
    </div>
    <div>
      <span data-testid="fizzBuzz">{{ fizzBuzz() }}</span>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
  fizzBuzz = computed(() => {
    const currentCount = this.store.counter();
    if (currentCount === 0) {
      return '';
    }

    const fizz = currentCount % 3 === 0;
    const buzz = currentCount % 5 === 0;

    if (fizz && buzz) {
      return 'FizzBuzz';
    } else if (fizz) {
      return 'Fizz';
    } else if (buzz) {
      return 'Buzz';
    }

    return '';
  });
}
