import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <div>
        <a class="link" routerLink="ui">UI</a>
      </div>

      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
