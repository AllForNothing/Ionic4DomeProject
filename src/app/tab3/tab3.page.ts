import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  showToast() {
    if (cordova && cordova.plugins && ((cordova.plugins) as any).ToastDemo) {
      ((cordova.plugins) as any).ToastDemo.showToast('我是toast');
    } else {
      console.error("浏览器环境无法运行本地插件");
    }
  }
}
