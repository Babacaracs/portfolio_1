import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencePage } from './competence.page';

describe('CompetencePage', () => {
  let component: CompetencePage;
  let fixture: ComponentFixture<CompetencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
