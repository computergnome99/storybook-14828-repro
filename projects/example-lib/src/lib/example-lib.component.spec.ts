import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLibComponent } from './example-lib.component';

describe('ExampleLibComponent', () => {
  let component: ExampleLibComponent;
  let fixture: ComponentFixture<ExampleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
