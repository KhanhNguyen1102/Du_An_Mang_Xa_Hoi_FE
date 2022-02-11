import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFriendComponent } from './acc-friend.component';

describe('AccFriendComponent', () => {
  let component: AccFriendComponent;
  let fixture: ComponentFixture<AccFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
