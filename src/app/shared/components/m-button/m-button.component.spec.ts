import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MTileComponent } from './m-button.component';

describe('MTileComponent', () => {
  let component: MTileComponent;
  let fixture: ComponentFixture<MTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
