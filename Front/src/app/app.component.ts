import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title;
  constructor(private api: ApiService) { }
  ngOnInit() {
    // this.api.getData().subscribe(res => this.title = (typeof res == "string") ? this.changeData(res) : res);
    this.api.testGoogleAppScript("get", 1491)
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
}
