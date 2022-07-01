import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getMb' })
export class GetMbPipe implements PipeTransform {
 constructor() {}

 transform(value: any): string {
  var result: string = "";
  //convert to number
  var bytes: number = +value;
  //raise to the negative 6th power
  var kb: number = bytes / 1000;
  var mb: number = 0;
  var gb: number = 0;
  var tb: number = 0;
  result = `${kb} KB`;
  //check whether or not to also get MB/GB/TB value
  if(kb >= 1000){
    mb = kb / 1000;
    result = `${mb} MB`;
    if(mb >= 1000){
        gb = mb / 1000;
        result = `${gb} GB`;
        if(gb >= 1000){
            tb = gb / 1000;
            result = `${tb} TB`;
        }
      }
  }

  return result; 
 }
}