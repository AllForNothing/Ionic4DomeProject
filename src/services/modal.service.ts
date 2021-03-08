import { Injectable } from '@angular/core';
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _toastA: any;
  private _toastB: any;

  constructor(private toastController: ToastController) {
  }


  async showA(msg: string) {
    if (this._toastA) {
      this._toastA.dismiss();
      this._toastA = null;
    }
    this._toastA = await this.toastController.create({
      message: msg,
      position: 'top'
    });
    return this._toastA.present();
  }
  async showB(msg: string) {
    if (this._toastB) {
      this._toastB.dismiss();
      this._toastB = null;
    }
    this._toastB = await this.toastController.create({
      message: msg,
      position: 'bottom'
    });
    return this._toastB.present();
  }
  async closeA() {
    if (this._toastA) {
       return this._toastA.dismiss();
    }
    return  Promise.resolve(null);
  }

  async closeAll() {
    const arr = [];
    if (this._toastA) {
      arr.push(this._toastA.dismiss());
    }
    if (this._toastB) {
      arr.push(this._toastB.dismiss());
    }
    return Promise.all(arr);
  }
}
