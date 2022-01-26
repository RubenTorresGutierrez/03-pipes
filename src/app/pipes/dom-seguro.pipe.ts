import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  domSanitizer:DomSanitizer;

  constructor(domSanitizer:DomSanitizer) {
    this.domSanitizer = domSanitizer;
  }

  transform(value:string):SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
