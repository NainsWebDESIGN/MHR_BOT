import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UidStatusService } from '@service/uid-status.service';
import env from '@ts/env';
import cdnModule from '@ts/loadCDN';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private uidStatus: UidStatusService, private router: Router) {
    ['loadStyle', 'loadScript'].forEach(item => env[item].forEach(url => cdnModule(url, (item == 'loadStyle' ? 'link' : 'script'))));
    const uuid = localStorage.getItem("uid");
    if (uuid) {
      this.uidStatus.uid = uuid;
      this.router.navigate([`/sheet/rock`]);
    }
  }
  ngOnInit() {
    // this.api.getData().subscribe(res => this.title = (typeof res == "string") ? this.changeData(res) : res);
  }
  changeData(res) {
    const box = res.split("_").map(item => {
      const itemData = item.split(",");
      let rock = {};
      rock["skill1"] = itemData[0];
      rock["skill2"] = itemData[2];
      rock["point1"] = itemData[1];
      rock["point2"] = itemData[3];
      rock['hole'] = `${itemData[4]}-${itemData[5]}-${itemData[6]}`;
      return rock;
    });
    console.log(JSON.stringify(box));
    return box;
  }
}
