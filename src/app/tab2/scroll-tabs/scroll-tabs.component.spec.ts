import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollTabsComponent } from './scroll-tabs.component';
import { Tab2PageModule } from '../tab2.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ScrollTabsComponent', () => {
  let component: ScrollTabsComponent;
  let fixture: ComponentFixture<ScrollTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Tab2PageModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
