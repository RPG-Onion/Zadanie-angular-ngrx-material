import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PunchlineDialogComponent} from './punchline-dialog.component';

describe('PunchlineDialogComponent', () => {
  let component: PunchlineDialogComponent;
  let fixture: ComponentFixture<PunchlineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PunchlineDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(PunchlineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
