import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { UiComponent } from './pages/ui.component';
import { PrefsComponent } from './pages/prefs.component';
import { CounterStore } from './services/counter.store';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    providers: [CounterStore],
    component: CounterComponent,
    children: [
      {
        path: 'ui',
        component: UiComponent,
      },
      {
        path: 'prefs',
        component: PrefsComponent,
      },
    ],
  },
];
