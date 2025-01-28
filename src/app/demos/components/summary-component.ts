import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>
    <p>
      You have {{ this.animalCount() }} Animals, and Your Score is
      {{ this.currentScore() }}. {{ this.parMessage() }}
    </p>
  </div>`,
  styles: ``,
})
export class SummaryComponent {
  animalCount = input.required<number>();
  currentScore = input.required<number>();
  parMessage = computed(() => {
    const par = 4;
    if (this.currentScore() === par - 1) {
      return 'You are close to par.';
    } else if (this.currentScore() === par) {
      return 'You got par.';
    } else if (this.currentScore() > par) {
      return 'You are over par.';
    }

    return '';
  });
}
