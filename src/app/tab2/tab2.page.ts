import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from "../../services/modal.service";

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    @ViewChild('cornerStoneDemo', {static: true})
    cornerStoneDemo: ElementRef;
    navioption: NavigationOptions;
    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private modalService: ModalService) {
    }
    goToEchartsDemo() {
        this.navCtrl.navigateForward(['./echarts'], { relativeTo: this.route });
    }

    ngOnInit() {
        const element = this.cornerStoneDemo.nativeElement;
        const imageId = 'https://example.url.com/image.dcm';
        console.info(element);
       // this.cs.cornerstone.enable(element);
        /*this.cs.cornerstone.loadAndCacheImage(imageId).then((image) => {
          console.info('a');
        });*/
    }

    showA() {
       this.modalService.showA(new Date().getTime().toString());
    }
    showB() {
       this.modalService.showB(new Date().getTime().toString());
    }
    closeAll() {
       this.modalService.closeAll();
    }
}
