import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutosParaHoras'
})
export class MinutosParaHorasPipe implements PipeTransform {

  transform(minutos: number): string {

    if (minutos === null || minutos === undefined || isNaN(minutos) || minutos < 0) {
      return '';
    }

    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    const minutosFormatados = minutosRestantes < 10 ? '0' + minutosRestantes : minutosRestantes;
    return (horas > 0 ? `${horas}h`: '') + (minutosFormatados === '00' ? '' : `${minutosFormatados}m`);
  }

}
