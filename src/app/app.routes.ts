import { LexingComponent } from './components/projects/lexing/lexing.component';
import { Routes } from '@angular/router';
import { CandyMachineComponent } from './components/projects/candy-machine/candy-machine.component';
import { AutomatoComponent } from './components/automatos/automato/automato.component';
import { HomeComponent } from './components/home/home.component';
import { ElevatorComponent } from './components/projects/elevator/elevator.component';
import { AutomatoElevatorComponent } from './components/automatos/automato-elevator/automato-elevator.component';

export const routes: Routes = [
  {
    path: 'candy-machine',
    component: CandyMachineComponent,
    pathMatch: 'full',
  },
  {
    path: 'automato',
    component: AutomatoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'automato-elevator',
    component: AutomatoElevatorComponent,
  },
  {
    path: 'elevator',
    component: ElevatorComponent,
  },
  {
    path: 'lexing',
    component: LexingComponent,
  },
];
