import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:string, asteriscos?:boolean): unknown {

    if (asteriscos == false)
      return value;

    let valorFinal = "";
    for (let i = 0; i < value.length; i++)
      valorFinal += "*";
    return valorFinal;

  }

}
