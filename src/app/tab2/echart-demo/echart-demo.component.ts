import { Component, OnDestroy, OnInit } from '@angular/core';
import EChartOption = echarts.EChartOption;


@Component({
    selector: 'app-echart-demo',
    templateUrl: './echart-demo.component.html',
    styleUrls: ['./echart-demo.component.scss'],
})
export class EchartDemoComponent implements OnInit, OnDestroy {

    option: EChartOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    interval: any;

    constructor() {
    }

    ngOnInit() {
      // 模拟数据发生变化
        this.interval = setInterval(() => {
            (this.option.series[0] as any).data[0] += 1;
        }, 5000);
    }

    ngOnDestroy(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    passDate(): string {
        return JSON.stringify(this.option);
    }
}
