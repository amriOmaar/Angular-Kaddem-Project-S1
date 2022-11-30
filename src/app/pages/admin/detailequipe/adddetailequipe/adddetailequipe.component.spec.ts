import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddetailequipeComponent } from './adddetailequipe.component';

describe('AdddetailequipeComponent', () => {
  let component: AdddetailequipeComponent;
  let fixture: ComponentFixture<AdddetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddetailequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
