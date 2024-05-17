import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw3Component } from './cw3.component';

describe('Cw3Component', () => {
  let component: Cw3Component;
  let fixture: ComponentFixture<Cw3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cw3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
