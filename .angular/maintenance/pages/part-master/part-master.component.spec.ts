import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMasterComponent } from './part-master.component';

describe('PartMasterComponent', () => {
  let component: PartMasterComponent;
  let fixture: ComponentFixture<PartMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartMasterComponent]
    });
    fixture = TestBed.createComponent(PartMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
