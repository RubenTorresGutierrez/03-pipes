import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value:string, todas:boolean):string {

    value = value.trim();
    if(todas)
      for (let i = 0; i < value.length; i++) {

        // Variables
        let principio = value.substr(0, i);
        let final = value.substr(i + 1);

        switch (value.charAt(i - 1)) {
          case "":
          case " ":
          case ".":
            value = principio + value.charAt(i).toUpperCase() + final;
            break;
          default:
            value = principio + value.charAt(i).toLowerCase() + final;
            break;
        }

      }
    else
      for (let i = 0; i < value.length; i++) {

        // Variables
        let principio = value.substr(0, i);
        let final = value.substr(i + 1);

        if (i != 0)
          value = principio + value.charAt(i).toLowerCase() + final;
        else
          value = principio + value.charAt(i).toUpperCase() + final;

      }
    return value;

  }

}
