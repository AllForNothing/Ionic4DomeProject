一.angular2-signaturepad:
  1.  执行 npm install angular2-signaturepad --save    安装angular2-signaturepad
  2.  在需要用到的module 中引入，本列是在shared.module.ts 中引入。
  ```angular2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsComponent } from '../../global-components/echarts/echarts.component';
import { MultiTabsComponent } from '../../global-components/multi-tabs/multi-tabs.component';
import { DraggableDirective } from '../../directives/draggable.directive';
import { SignatureComponent } from '../../global-components/signature/signature.component';
import { SignaturePadModule } from 'angular2-signaturepad';
@NgModule({
  declarations: [
      EchartsComponent,
      MultiTabsComponent,
      DraggableDirective,
    SignatureComponent,
  ],
  imports: [
    CommonModule,
    SignaturePadModule
  ],
  exports: [
      EchartsComponent,
      MultiTabsComponent,
      DraggableDirective,
    SignatureComponent
  ]
})
export class SharedModule { }
  ```
二  使用：
   1.在需要的的使用的组件的模板文件里：
   ```angular2
<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>
```
   2.在组件ts 文件里：
   ```angular2
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent implements OnInit, AfterViewInit {
  @ViewChild( SignaturePad, {static: true}) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor() {
  }
  ngOnInit() {}
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
``` 

   3.可以看到 在 drawComplete方法里， 可以拿到签名的 dataUrl，拿到这个值就可以做自己后续想要的操作了，比如上传至服务端



