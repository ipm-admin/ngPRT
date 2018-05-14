import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploaderComponent } from './bulk-uploader.component';

describe('BulkUploaderComponent', () => {
  let component: BulkUploaderComponent;
  let fixture: ComponentFixture<BulkUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
