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
