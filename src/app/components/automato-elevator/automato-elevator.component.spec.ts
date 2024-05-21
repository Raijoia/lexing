import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatoElevatorComponent } from './automato-elevator.component';

describe('AutomatoElevatorComponent', () => {
  let component: AutomatoElevatorComponent;
  let fixture: ComponentFixture<AutomatoElevatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatoElevatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomatoElevatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
