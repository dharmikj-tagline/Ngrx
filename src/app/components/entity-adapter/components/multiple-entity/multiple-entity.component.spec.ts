import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleEntityComponent } from './multiple-entity.component';

describe('MultipleEntityComponent', () => {
  let component: MultipleEntityComponent;
  let fixture: ComponentFixture<MultipleEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultipleEntityComponent]
    });
    fixture = TestBed.createComponent(MultipleEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
