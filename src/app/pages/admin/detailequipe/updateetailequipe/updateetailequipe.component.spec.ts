import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateetailequipeComponent } from './updateetailequipe.component';

describe('UpdateetailequipeComponent', () => {
  let component: UpdateetailequipeComponent;
  let fixture: ComponentFixture<UpdateetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateetailequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
