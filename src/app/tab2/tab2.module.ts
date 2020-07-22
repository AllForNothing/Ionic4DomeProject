import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { SharedModule } from '../shared/shared.module';
import { EchartDemoComponent } from './echart-demo/echart-demo.component';
import { SignatureComponent } from '../../global-components/signature/signature.component';
import { ScrollTabsComponent } from './scroll-tabs/scroll-tabs.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: Tab2Page },
  { path: 'echarts', component: EchartDemoComponent },
  { path: 'signature', component: SignatureComponent },
  { path: 'scroll-tabs', component: ScrollTabsComponent },
];

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      Tab2Page,
    EchartDemoComponent,
    ScrollTabsComponent
  ]
})
export class Tab2PageModule {}
