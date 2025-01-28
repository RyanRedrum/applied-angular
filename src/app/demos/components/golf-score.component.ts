import {
  Component,
  ChangeDetectionStrategy,
  signal,
  output,
  input,
} from '@angular/core';

@Component({
  selector: 'app-golf-score',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>
      Your Current Score:
      <span>{{ currentScore() }}</span>
    </p>

    <div>
      <button (click)="addStroke()" class="btn btn-primary">Took A Shot</button>
    </div>
  `,
  styles: ``,
})
export class GolfScoreComponent {
  currentScore = input<number>(0);
  scoreChanged = output<number>();

  addStroke() {
    // hey, update the dom wherever the currentScore is shown now.
    this.scoreChanged.emit(this.currentScore() + 1);
  }
}
