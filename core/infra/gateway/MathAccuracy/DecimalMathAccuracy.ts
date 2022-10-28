import { Decimal } from 'decimal.js';
import { MathAccuracyInterface } from '../MathAccuracy/protocol/MathAccuracyInterface';

export class DecimalMathAccuracy implements MathAccuracyInterface {
  decimal(value: string | number, places: number) {
    return new Decimal(value).toFixed(places, Decimal.rounding);
  }
}
