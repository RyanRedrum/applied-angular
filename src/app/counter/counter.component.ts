import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>Counter stuff goes here</div> `,
  styles: ``,
})
export class CounterComponent {}
