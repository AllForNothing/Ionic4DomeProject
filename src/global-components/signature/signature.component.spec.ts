import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureComponent } from './signature.component';
import { SignaturePadModule } from 'angular2-signaturepad';

describe('SignatureComponent', () => {
  let component: SignatureComponent;
  let fixture: ComponentFixture<SignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureComponent ],
      imports: [IonicModule.forRoot(), SignaturePadModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
