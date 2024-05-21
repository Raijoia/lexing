import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatoComponent } from './automato.component';

describe('AutomatoComponent', () => {
  let component: AutomatoComponent;
  let fixture: ComponentFixture<AutomatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
