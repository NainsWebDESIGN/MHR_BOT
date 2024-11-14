import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title;
  dataValue: number = 0;
  timeInterVal;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.api.getData().subscribe(res => {
      this.title = (typeof res == "string") ? this.changeData(res) : res;
      // this.api.testGoogleAppScript("post", 2862, "rock", this.title[this.dataValue]).subscribe(() => this.dataValue++);
      // this.timeInterVal = setInterval(() => {
      //   this.api.testGoogleAppScript("post", 2862, "rock", this.title[this.dataValue])
      //     .subscribe(res => {
      //       if (this.dataValue == this.title.length - 1) {
      //         clearInterval(this.timeInterVal);
      //         console.log(res);
      //       } else {
      //         this.dataValue++;
      //       }
      //     });
      // }, 2000);
    });
    // this.api.testGoogleAppScript("get", 1491)
    //   .subscribe(res => console.log(res));

    // this.api.testGoogleAppScript("post")
    //   .subscribe(res => console.log(res));
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
