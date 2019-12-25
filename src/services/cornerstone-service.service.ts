import { Injectable } from '@angular/core';
import * as cornerstone from 'cornerstone-core';
import * as cornerstoneMath from 'cornerstone-math';
import * as cornerstoneTools  from 'cornerstone-tools';
import { Hammer } from 'hammerjs';

@Injectable({
    providedIn: 'root'
})
export class CornerstoneServiceService {
    cornerstoneTools;
    cornerstone;

    constructor() {
        this.cornerstone = cornerstone;
        console.info(this.cornerstone);
        this.cornerstoneTools = cornerstoneTools;
        this.cornerstoneTools.external.cornerstone = cornerstone;
        this.cornerstoneTools.external.Hammer = Hammer;
        this.cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
        this.cornerstoneTools.init({
            /**
             * When cornerstone elements are enabled,
             * should `mouse` input events be listened for?
             */
            mouseEnabled: true,
            /**
             * When cornerstone elements are enabled,
             * should `touch` input events be listened for?
             */
            touchEnabled: true,
            /**
             * A special flag that synchronizes newly enabled cornerstone elements. When
             * enabled, their active tools are set to reflect tools that have been
             * activated with `setToolActive`.
             */
            globalToolSyncEnabled: false,
            /**
             * Most tools have an associated canvas or SVG cursor. Enabling this flag
             * causes the cursor to be shown when the tool is active, bound to left
             * click, and the user is hovering the enabledElement.
             */
            showSVGCursors: true,
        });
    }
}
