import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHomeworkComponent } from './profile-homework.component';

describe('ProfileHomeworkComponent', () => {
  let component: ProfileHomeworkComponent;
  let fixture: ComponentFixture<ProfileHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHomeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
