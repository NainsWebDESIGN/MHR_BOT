import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Popup } from '@ts/interface';

@Injectable()
export class PopupService {
    private popup: Popup = {
        show: false,
        message: '',
    }
    private popupSubject = new BehaviorSubject<Popup>(this.popup);
    popup$ = this.popupSubject.asObservable();
    constructor() { }
    open(popup: string) {
        this.popup.message = popup;
        this.popup.show = true;
    }
    close() {
        this.popup.show = false;
    }
}
