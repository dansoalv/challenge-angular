import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutorsComponent } from './instrutors.component';

describe('InstrutorsComponent', () => {
  let component: InstrutorsComponent;
  let fixture: ComponentFixture<InstrutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
