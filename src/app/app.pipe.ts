import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'object'
})
export class ObjectPipe implements PipeTransform {

  transform(value: any) {
    return Object.keys(value).map(item => {
      return {
        key: item,
        value: value[item]
      };
    });
  }

}

@Pipe({
  name: 'formatArr'
})
export class formatArrPipe implements PipeTransform {

  transform(value: any) {
    return value.map(item => {
      item['arr'] = [];
      for (let i = 0; i < item.value; i++) {
        item.arr.push(i + 1);
      }
      return item;
    })
  }

}