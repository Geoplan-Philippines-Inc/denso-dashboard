import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMasterComponent } from './zone-master.component';

describe('ZoneMasterComponent', () => {
  let component: ZoneMasterComponent;
  let fixture: ComponentFixture<ZoneMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneMasterComponent]
    });
    fixture = TestBed.createComponent(ZoneMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
