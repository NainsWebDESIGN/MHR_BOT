import { Component, OnInit } from '@angular/core';
import { PopupService } from '@service/popup.service';
import { Popup } from '@ts/interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent implements OnInit {
  Popup: Popup = {
    show: false,
    message: ""
  };
  constructor(public popup: PopupService) { }
  ngOnInit() {
    this.popup.popup$.subscribe(popup => this.Popup = popup);
  }

}
