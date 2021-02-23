import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoffsComponent } from './playoffs.component';

describe('PlayoffsComponent', () => {
  let component: PlayoffsComponent;
  let fixture: ComponentFixture<PlayoffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayoffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
