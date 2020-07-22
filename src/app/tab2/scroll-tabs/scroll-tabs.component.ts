import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-tabs',
  templateUrl: './scroll-tabs.component.html',
  styleUrls: ['./scroll-tabs.component.scss'],
})
export class ScrollTabsComponent implements OnInit {
  activeIndex: number = 0;
  tabs: string[] = ["tab1", "tabdddddddddd2",
    "tadddddddddb3", "dddddddddddd", "tabfdffffff5", "tab6", "tab7", "tab8", "tab9", "tab10", "tab11", "tab12"];
  @ViewChild('container', {static: true})
  containerEleRef: ElementRef;
  constructor() { }
  ngOnInit() {}
  // 方法1   会滚动到中间， ios webview 和 Safari 浏览器不支持behavior: "smooth", 会直接“跳”到相应位置
  chooseTab1(e: any, index) {
    this.activeIndex = index;
    e.target.scrollIntoView({behavior: "smooth", block: 'center', inline: "center"});
  }
  // 方法2 和方法1 等价  因为我们在container的 属性设置了 scroll-behavior: smooth;
  chooseTab2(e: any, index) {
    this.activeIndex = index;
    this.containerEleRef.nativeElement.scrollLeft =  (e.target.offsetLeft + e.target.offsetWidth / 2) - window.innerWidth / 2;
  }
  // 方法3 注意使用该方法时，必须将 scroll-behavior: smooth 去掉
  chooseTab3(e: any, index) {
    this.activeIndex = index;
    const begin = this.containerEleRef.nativeElement.scrollLeft;
    const end = e.target.offsetLeft + e.target.offsetWidth / 2 - window.innerWidth / 2;
    // scrollLeft  从 begin值 变成 end 值， 我们让它分步走，每步15ms内走10px 的距离
    let steps: number = Math.abs(Math.floor((end - begin) / 10));
    if (steps) {
      const interval = setInterval(() => {
        // 每一步走的距离
        this.containerEleRef.nativeElement.scrollLeft += end > begin ? 10 : -10;
        // 5ms 走一步
        steps--;
        if (steps <= 0) {
          clearInterval(interval);
        }
      }, 15);
    }
  }
}
