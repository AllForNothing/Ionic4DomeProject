import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { EchartsComponent } from '../../global-components/echarts/echarts.component';
import { SharedModule } from '../shared/shared.module';
import { EchartDemoComponent } from './echart-demo/echart-demo.component';

const routes: Routes = [
  { path: '', component: Tab2Page },
  { path: 'echarts', component: EchartDemoComponent },
];

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      Tab2Page,
    EchartDemoComponent
  ]
})
export class Tab2PageModule {}
