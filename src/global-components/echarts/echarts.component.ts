import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild
} from '@angular/core';
/**
 * 我们可以按需引入来有效控制编译包的体积.
 * 个人比较推荐的做法是到官网在线定制echarts.min.js 之后， 将其放在在项目根目录下的third-party-js的目录（没有则创建）,
 * 然后在angular.json的scripts数组中加入echarts.min.js
 * 使用此方法，则无需再执行npm install echarts
 * 如果想使用ts的类型检测，则npm install @types/echarts 是必须的
 */

import * as echarts from 'echarts'; // 这里直接引入了全部，这将导致压缩包的体积增加约1.5M
import ECharts = echarts.ECharts;
/**
 * @Description:
 * @author 孙世军
 * @Date 2019-12-25
 */
@Component({
    selector: 'echarts',
    templateUrl: './echarts.component.html',
    styleUrls: ['./echarts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsComponent implements AfterViewInit, OnChanges {
    @Input()
    jsonStringData: string;
    @Input()
    height: string;
    @Input()
    width: string;
    private _hasViewInit: boolean = false;
    private _chartInstance: ECharts;
    @ViewChild('echart', {static: false}) echartElementRef: ElementRef;
    constructor() {
    }
    ngAfterViewInit(): void {
        this._chartInstance = echarts.init(this.echartElementRef.nativeElement);
        this._hasViewInit = true;
        this.update();
    }
    // 使得该组件具备自动更新的能力
    ngOnChanges(): void {
        this.update();
    }

    update() {
        if (this._hasViewInit && this._hasViewInit && this.jsonStringData) {
            this._chartInstance.setOption(JSON.parse(this.jsonStringData));
        }
    }
}
