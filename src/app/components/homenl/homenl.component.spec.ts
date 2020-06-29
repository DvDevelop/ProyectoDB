import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenlComponent } from './homenl.component';

describe('HomenlComponent', () => {
  let component: HomenlComponent;
  let fixture: ComponentFixture<HomenlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
