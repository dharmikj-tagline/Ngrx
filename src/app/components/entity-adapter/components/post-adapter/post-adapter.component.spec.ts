import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdapterComponent } from './post-adapter.component';

describe('PostAdapterComponent', () => {
  let component: PostAdapterComponent;
  let fixture: ComponentFixture<PostAdapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostAdapterComponent]
    });
    fixture = TestBed.createComponent(PostAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
