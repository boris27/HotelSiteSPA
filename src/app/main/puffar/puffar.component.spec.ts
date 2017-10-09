import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuffarComponent } from './puffar.component';

describe('PuffarComponent', () => {
  let component: PuffarComponent;
  let fixture: ComponentFixture<PuffarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuffarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuffarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
