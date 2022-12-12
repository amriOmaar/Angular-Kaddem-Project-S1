import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipesComponent } from './add-equipes.component';

describe('AddEquipesComponent', () => {
  let component: AddEquipesComponent;
  let fixture: ComponentFixture<AddEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
