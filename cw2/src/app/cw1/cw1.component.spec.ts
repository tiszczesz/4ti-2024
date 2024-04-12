import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw1Component } from './cw1.component';

describe('Cw1Component', () => {
  let component: Cw1Component;
  let fixture: ComponentFixture<Cw1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cw1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
