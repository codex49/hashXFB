import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyusingComponent } from './whyusing.component';

describe('WhyusingComponent', () => {
  let component: WhyusingComponent;
  let fixture: ComponentFixture<WhyusingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyusingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyusingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
