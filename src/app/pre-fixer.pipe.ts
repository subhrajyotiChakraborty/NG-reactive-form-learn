import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preFixer'
})
export class PreFixerPipe implements PipeTransform {

  transform(value: string, fixer?: string): string {
    return (fixer ? fixer : 'ss') + ' ' + value;
  }

}
