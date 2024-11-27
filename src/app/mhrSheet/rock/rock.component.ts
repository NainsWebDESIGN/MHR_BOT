import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service/api.service';
import { UidStatusService } from '@service/uid-status.service';
import { PopupService } from '@service/popup.service';
import { GateWay } from '@ts/enum';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html'
})
export class RockComponent implements OnInit {
  rock = null;
  constructor(private api: ApiService, private popup: PopupService, private uidStatus: UidStatusService) { }
  ngOnInit() {
    this.api.getGAS(GateWay.GET, { uuid: this.uidStatus.uid }).subscribe(res => {
      // console.log(res);
      if (typeof res === "string") {
        this.popup.open(res);
      } else {
        this.rock = res.map(item => {
          return {
            skill1: item[0],
            skill2: item[2],
            point1: item[1],
            point2: item[3],
            hole: item[4],
          }
        })
        // console.log(this.rock);
      }
    });
  }

}
