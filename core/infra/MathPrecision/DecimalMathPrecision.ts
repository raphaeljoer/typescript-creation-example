import { Decimal } from 'decimal.js';
import { MathPrecisionInterface } from '../MathPrecision/protocol/MathPresicisionInterface';

export class DecimalMathPrecision implements MathPrecisionInterface {
  decimal(value: string | number, places: number, rounding: any) {
    return new Decimal(value).toFixed(places, rounding);
  }
}
