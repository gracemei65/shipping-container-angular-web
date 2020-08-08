import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSearchDeleteComponent } from './container-search-delete.component';

describe('ContainerSearchDeleteComponent', () => {
  let component: ContainerSearchDeleteComponent;
  let fixture: ComponentFixture<ContainerSearchDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerSearchDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSearchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
