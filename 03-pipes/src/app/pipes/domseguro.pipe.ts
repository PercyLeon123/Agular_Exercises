import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer : DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    /*  PIPE : API deshabilita la desinfección incorporada de Angular para el valor pasado*/
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
