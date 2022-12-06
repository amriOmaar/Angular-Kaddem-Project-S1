import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListEtudiantsComponent } from './show-list-etudiants.component';

describe('ShowListEtudiantsComponent', () => {
  let component: ShowListEtudiantsComponent;
  let fixture: ComponentFixture<ShowListEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
