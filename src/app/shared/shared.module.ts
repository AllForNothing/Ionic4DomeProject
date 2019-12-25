import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsComponent } from '../../global-components/echarts/echarts.component';



@NgModule({
  declarations: [
      EchartsComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
      EchartsComponent
  ]
})
export class SharedModule { }
