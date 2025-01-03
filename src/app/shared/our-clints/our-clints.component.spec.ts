import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClintsComponent } from './our-clints.component';

describe('OurClintsComponent', () => {
  let component: OurClintsComponent;
  let fixture: ComponentFixture<OurClintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurClintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurClintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
