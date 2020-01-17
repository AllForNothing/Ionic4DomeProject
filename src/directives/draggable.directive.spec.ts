import { DraggableDirective } from './draggable.directive';
import { ElementRef } from '@angular/core';

describe('DraggableDirective', () => {
  it('should create an instance', () => {
    const directive = new DraggableDirective(null);
    expect(directive).toBeTruthy();
  });
});
