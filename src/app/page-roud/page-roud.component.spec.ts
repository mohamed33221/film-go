import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRoudComponent } from './page-roud.component';

describe('PageRoudComponent', () => {
  let component: PageRoudComponent;
  let fixture: ComponentFixture<PageRoudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRoudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
