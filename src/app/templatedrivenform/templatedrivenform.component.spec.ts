import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenformComponent } from './templatedrivenform.component';

describe('TemplatedrivenformComponent', () => {
  let component: TemplatedrivenformComponent;
  let fixture: ComponentFixture<TemplatedrivenformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedrivenformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
