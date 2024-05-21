import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  links = [
    { label: 'Candy Machine', url: 'candy-machine' },
    { label: 'Elevator', url: 'elevator' },
    { label: 'Lexing', url: 'lexing' },
  ]
}
