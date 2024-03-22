import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwietaComponent } from './swieta.component';

describe('SwietaComponent', () => {
  let component: SwietaComponent;
  let fixture: ComponentFixture<SwietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwietaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
