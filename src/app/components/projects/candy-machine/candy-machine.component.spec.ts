import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyMachineComponent } from './candy-machine.component';

describe('CandyMachineComponent', () => {
  let component: CandyMachineComponent;
  let fixture: ComponentFixture<CandyMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandyMachineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CandyMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
