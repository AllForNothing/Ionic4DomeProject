import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultiTabsComponent } from './multi-tabs.component';

describe('MultiTabsComponent', () => {
  let component: MultiTabsComponent;
  let fixture: ComponentFixture<MultiTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTabsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
