import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexingComponent } from './lexing.component';

describe('LexingComponent', () => {
  let component: LexingComponent;
  let fixture: ComponentFixture<LexingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LexingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LexingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
