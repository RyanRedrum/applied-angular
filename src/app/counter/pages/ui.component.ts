import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="decrement()"
        [disabled]="!canDecrement()"
      >
        -
      </button>
      <span data-testid="current">{{ count() }}</span>
      <button class="btn btn-primary" (click)="increment()">+</button>
    </div>
    <div>
      <span data-testid="fizzBuzz">{{ fizzBuzz() }}</span>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  count = signal<number>(0);
  canDecrement = computed(() => this.count() > 0);
  fizzBuzz = computed(() => {
    const currentCount = this.count();
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

  increment = () => {
    this.count.update(() => this.count() + 1);
  };

  decrement = () => {
    if (this.canDecrement()) {
      this.count.update(() => this.count() - 1);
    }
  };
}
