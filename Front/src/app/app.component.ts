import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';
import { GateWay } from '@ts/enum';
import env from '@ts/env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = null;
  constructor(private api: ApiService) {
    ['loadStyle', 'loadScript'].forEach(item => env[item].forEach(url => this.loadCDN(url, (item == 'loadStyle' ? 'link' : 'script'))));
  }
  ngOnInit() {
    // this.api.getData().subscribe(res => this.title = (typeof res == "string") ? this.changeData(res) : res);
    this.api.testGoogleAppScript("get", GateWay.GET)
      .subscribe(res => {
        this.title = res.map(item => {
          return {
            skill1: item[0],
            skill2: item[2],
            point1: item[1],
            point2: item[3],
            hole: item[4]
          };
        })
        console.log(this.title);
      });
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

  private loadCDN(url: string, type: string) {
    const head = <HTMLDivElement>document.head;
    const element = document.createElement(type);
    element.innerHTML = '';
    switch (type) {
      case 'link':
        element['rel'] = "stylesheet";
        element['href'] = url;
        break;
      case 'script':
        element['src'] = url;
        element['async'] = true;
        element['defer'] = true;
        break;
    }
    head.appendChild(element);
  }
}
