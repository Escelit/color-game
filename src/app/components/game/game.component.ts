import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  gueseColors: string[] = [
    '#abcde1',
    '#afcde1',
    '#ebcde1',
    '#dbcde9',
    '#eeffaa',
    '#bca123',
  ];
  colorOptions = signal<string[]>([]);
  targetColor = signal<string>('');
  score = signal<number>(0);
  gameStatus = signal('');
  isCorrect = signal(false);
  constructor() {
    this.initGame()
  }

  initGame() {
    this.targetColor.set(
      this.gueseColors[Math.floor(Math.random() * this.gueseColors.length)]
    );
    this.colorOptions.set(
      [...this.gueseColors].sort(() => Math.random() - 0.5)
    );
  }

  handleColor(color: string) {
    if (color === this.targetColor()) {
      this.score.update((prev) => prev + 1);
      this.gameStatus.set('Bravo! you get it right');
      this.isCorrect.set(true);
      this.initGame()
    } else {
      this.gameStatus.set('Wrong! Try again.');
      this.isCorrect.set(false);

    }
  }
  newGame() {
    this.initGame();
    this.gameStatus.set('');
    this.score.set(0);
  }
}
