import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsComponent } from '../../global-components/echarts/echarts.component';
import { MultiTabsComponent } from '../../global-components/multi-tabs/multi-tabs.component';



@NgModule({
  declarations: [
      EchartsComponent,
      MultiTabsComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
      EchartsComponent,
      MultiTabsComponent
  ]
})
export class SharedModule { }
