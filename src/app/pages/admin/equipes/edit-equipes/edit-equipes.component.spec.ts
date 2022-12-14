import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipesComponent } from './edit-equipes.component';

describe('EditEquipesComponent', () => {
  let component: EditEquipesComponent;
  let fixture: ComponentFixture<EditEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
