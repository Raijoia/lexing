import { Component } from '@angular/core';
import { ICandy } from './candy';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-candy-machine',
  standalone: true,
  imports: [NgFor],
  templateUrl: './candy-machine.component.html',
  styleUrl: './candy-machine.component.scss',
})
export class CandyMachineComponent {
  candy: ICandy[] = [
    {
      select: 1,
      name: 'Crunch',
      value: 5,
    },
    {
      select: 2,
      name: 'Snickers',
      value: 6,
    },
    {
      select: 3,
      name: 'Twix',
      value: 7,
    },
  ];
  values = [1, 2, 5];
  valueAll = 0;
  ngOnInit() {}

  addOneValue(): void {
    if (this.valueAll >= 10) {
      alert('Maximun value is 10!');
      return;
    }
    this.valueAll += 1;
    console.log(this.valueAll);
  }

  addTwoValue(): void {
    if (this.valueAll >= 9) {
      alert('Maximun value is 10!');
      return;
    }
    this.valueAll += 2;
    console.log(this.valueAll);
  }

  addFiveValue(): void {
    if (this.valueAll >= 6) {
      alert('Maximun value is 10!');
      return;
    }
    this.valueAll += 5;
    console.log(this.valueAll);
  }

  buySelectOne(): void {
    if (this.valueAll < 5) {
      alert(`You can't buy this item, you value is ${this.valueAll}`);
      return;
    }
    if (this.valueAll == 5) {
      this.valueAll -= 5;
      alert(`Congratulations, you buy a crunch`);
      return;
    }
    if (this.valueAll > 5) {
      alert(
        `Congratulations, you buy a crunch and you change is ${
          this.valueAll - 5
        }`
      );
      this.valueAll = 0;
      return;
    }
  }

  buySelectTwo(): void {
    if (this.valueAll < 5) {
      alert(`You can't buy this item, you value is ${this.valueAll}`);
      return;
    }
    if (this.valueAll == 6) {
      this.valueAll -= 6;
      alert(`Congratulations, you buy a snickers`);
      return;
    }
    if (this.valueAll > 6) {
      alert(
        `Congratulations, you buy a snickers and you change is ${
          this.valueAll - 6
        }`
      );
      this.valueAll = 0;
      return;
    }
  }

  buySelectThree(): void {
    if (this.valueAll < 5) {
      alert(`You can't buy this item, you value is ${this.valueAll}`);
      return;
    }
    if (this.valueAll == 7) {
      this.valueAll -= 7;
      alert(`Congratulations, you buy a twix`);
      return;
    }
    if (this.valueAll > 7) {
      alert(
        `Congratulations, you buy a twix and you change is ${this.valueAll - 7}`
      );
      this.valueAll = 0;
      return;
    }
  }
}
