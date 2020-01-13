import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 *  使用说明
 *  1.在元素上添加appDraggable指令即可实现元素的可拖拽
 *  2.保证该元素宽高固定且相等（不相等可以考虑用个正方形元素套起来）
 *  3.可拖拽的范围为可拖拽元素的父元素(若无，则为整个屏幕)内部，所以要保证父元素有合适的宽高
 *  4.如果可拖拽元素有margin值，可将其手动设为0;
 *    可拖拽元素如果是一个组件，例如
 *       <ion-fab [offsetY]="28" appDraggable vertical="center" horizontal="end" slot="fixed">
 *           <ion-fab-button>
 *              <ion-icon name="add"></ion-icon>
 *           </ion-fab-button>
 *        </ion-fab>
 *        对于这种基于shadow dom 实现的组件， 他在fixed定位下设置top,right等值时的参考是slot插槽点
 *        也就是说你如果将他的top设为0, 这个组件视图上部并不会贴住窗口上部（实际是slot插槽点贴住了）。
 *        对于这种情况，可添加[offsetY]="28"（这里我们假设偏移值是28px）即可轻松解决问题
 *
 */

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @Input()
  offsetX: number = 0; // 偏移补偿量,单位为px,使用rem等百分比计量单位的，需转化为px.可用于抵消margin-left
  @Input()
  offsetY: number = 0; // 偏移补偿量,单位为px,使用rem等百分比计量单位的，需转化为px.可用于抵消margin-top
  constructor(private el: ElementRef) {
  }
  @HostListener('touchmove' , ['$event']) touchmove(e) {
    if (e && e.touches && e.touches[0]) {
      // 计算悬浮元素的 x 和 y 的范围
      let minX: number = 0;
      let maxX: number = window.innerWidth - this.el.nativeElement.offsetHeight;
      let minY: number = 0;
      let maxY: number = window.innerHeight - this.el.nativeElement.offsetHeight;
      if (this.el.nativeElement.parentNode && this.el.nativeElement.parentNode.getBoundingClientRect) {
         const parentHeight: number = this.el.nativeElement.parentNode.offsetHeight;
         const parentWidth: number = this.el.nativeElement.parentNode.offsetWidth;
         minX = this.el.nativeElement.parentNode.getBoundingClientRect().left;
         maxX = this.el.nativeElement.parentNode.getBoundingClientRect().left + parentWidth - this.el.nativeElement.offsetHeight;
         minY = this.el.nativeElement.parentNode.getBoundingClientRect().top;
         maxY = this.el.nativeElement.parentNode.getBoundingClientRect().top + parentHeight - this.el.nativeElement.offsetHeight;
      }
      let right: number = e.touches[0].clientX - this.el.nativeElement.offsetHeight * 0.5;
      let top: number = e.touches[0].clientY - this.el.nativeElement.offsetHeight * 0.5;
      right = right < minX ? minX : right;
      right = right > maxX ? maxX : right;
      top = top < minY ? minY : top;
      top = top > maxY ? maxY : top;
      right += this.offsetX;
      top += this.offsetY;
      this.el.nativeElement.setAttribute('style', `position: fixed;top: ${top}px;left: ${right}px`);
    }
    e.preventDefault();
    e.stopPropagation();
  }
}
