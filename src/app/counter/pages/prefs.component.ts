import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-preferences',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      Select amount to count by:
      <select
        #counterSelect
        class="select w-full max-w-xs"
        [value]="store.counterChangeAmount()"
        (change)="store.setCounterChangeAmount(counterSelect.value)"
      >
        <option>1</option>
        <option>3</option>
        <option>5</option>
      </select>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
