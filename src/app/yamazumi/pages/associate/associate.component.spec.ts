import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateComponent } from './associate.component';

describe('AssociateComponent', () => {
  let component: AssociateComponent;
  let fixture: ComponentFixture<AssociateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateComponent]
    });
    fixture = TestBed.createComponent(AssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
