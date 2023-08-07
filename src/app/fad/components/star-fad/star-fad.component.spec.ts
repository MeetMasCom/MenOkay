import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFadComponent } from './star-fad.component';

describe('StarFadComponent', () => {
  let component: StarFadComponent;
  let fixture: ComponentFixture<StarFadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarFadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarFadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
