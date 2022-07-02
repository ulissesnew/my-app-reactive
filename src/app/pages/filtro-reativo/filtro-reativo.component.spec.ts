import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroReativoComponent } from './filtro-reativo.component';

describe('FiltroReativoComponent', () => {
  let component: FiltroReativoComponent;
  let fixture: ComponentFixture<FiltroReativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroReativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
