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
  template: ` <div>
    <button
      class="btn btn-primary"
      (click)="decrement()"
      [disabled]="!canDecrement()"
    >
      -
    </button>
    <span data-testid="current">{{ count() }}</span>
    <button class="btn btn-primary" (click)="increment()">+</button>
  </div>`,
  styles: ``,
})
export class UiComponent {
  count = signal<number>(0);
  canDecrement = computed(() => this.count() > 0);

  increment = () => {
    this.count.update(() => this.count() + 1);
  };

  decrement = () => {
    if (this.canDecrement()) {
      this.count.update(() => this.count() - 1);
    }
  };
}
