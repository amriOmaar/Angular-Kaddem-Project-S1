import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEtudiantComponent } from './card-etudiant.component';

describe('CardEtudiantComponent', () => {
  let component: CardEtudiantComponent;
  let fixture: ComponentFixture<CardEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
