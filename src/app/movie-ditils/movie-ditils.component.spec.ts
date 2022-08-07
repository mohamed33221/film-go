import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDitilsComponent } from './movie-ditils.component';

describe('MovieDitilsComponent', () => {
  let component: MovieDitilsComponent;
  let fixture: ComponentFixture<MovieDitilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDitilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDitilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
