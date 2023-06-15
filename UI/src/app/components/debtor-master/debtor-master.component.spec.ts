import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMasterComponent } from './debtor-master.component';

describe('CustomerMasterComponent', () => {
  let component: CustomerMasterComponent;
  let fixture: ComponentFixture<CustomerMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerMasterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});