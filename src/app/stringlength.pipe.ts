import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringLength' })
export class StringLengthPipe implements PipeTransform {
 constructor() {}

 transform(value: any, maxLength?: number): string {
  if (!maxLength) { maxLength = 20; }
  if(value.length > maxLength){
    return value.slice(0, maxLength) + "...";
  }
  return value; 
 }
}