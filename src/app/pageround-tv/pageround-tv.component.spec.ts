import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageroundTvComponent } from './pageround-tv.component';

describe('PageroundTvComponent', () => {
  let component: PageroundTvComponent;
  let fixture: ComponentFixture<PageroundTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageroundTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageroundTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
