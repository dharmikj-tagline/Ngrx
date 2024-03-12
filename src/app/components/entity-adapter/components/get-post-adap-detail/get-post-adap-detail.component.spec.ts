import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostAdapDetailComponent } from './get-post-adap-detail.component';

describe('GetPostAdapDetailComponent', () => {
  let component: GetPostAdapDetailComponent;
  let fixture: ComponentFixture<GetPostAdapDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GetPostAdapDetailComponent]
    });
    fixture = TestBed.createComponent(GetPostAdapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
