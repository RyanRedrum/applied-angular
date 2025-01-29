import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <ul>
        <li>
          <a class="link" routerLink="ui">UI</a>
        </li>
        <li>
          <a class="link" routerLink="prefs">Preferences</a>
        </li>
      </ul>

      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
