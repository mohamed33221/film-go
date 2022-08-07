import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetilsComponent } from './tv-detils.component';

describe('TvDetilsComponent', () => {
  let component: TvDetilsComponent;
  let fixture: ComponentFixture<TvDetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvDetilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
