import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequeComponent } from './updateque.component';

describe('UpdatequeComponent', () => {
  let component: UpdatequeComponent;
  let fixture: ComponentFixture<UpdatequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
