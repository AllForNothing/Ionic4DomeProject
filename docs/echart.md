一.引入echarts:
  1.  执行 npm install echarts --save   安装echarts
  2.  执行 npm install @types/echarts --save  安装申明文件，此步骤不是必须，但是强烈推荐。
  3.  在项目中引入EchartsComponent。使用该组件将原生echarts进行了简单封装， 这样使用起来就很angular[查看EchartsComponent](/src/global-components/echarts)

二  使用：
  1：在需要的地方直接使用<echarts [height]="'500px'" [width]="'400px'" [jsonStringData]="passDate()"></echarts>,并传入相关数据即可
  [查看demo](/src/app/tab2/echart-demo)



