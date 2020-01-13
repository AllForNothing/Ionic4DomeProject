import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsComponent } from '../../global-components/echarts/echarts.component';
import { MultiTabsComponent } from '../../global-components/multi-tabs/multi-tabs.component';
import { DraggableDirective } from '../../directives/draggable.directive';



@NgModule({
  declarations: [
      EchartsComponent,
      MultiTabsComponent,
      DraggableDirective
  ],
  imports: [
      CommonModule
  ],
  exports: [
      EchartsComponent,
      MultiTabsComponent,
      DraggableDirective
  ]
})
export class SharedModule { }
