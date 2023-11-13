import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagMasterComponent } from './tag-master.component';

describe('TagMasterComponent', () => {
  let component: TagMasterComponent;
  let fixture: ComponentFixture<TagMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagMasterComponent]
    });
    fixture = TestBed.createComponent(TagMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
