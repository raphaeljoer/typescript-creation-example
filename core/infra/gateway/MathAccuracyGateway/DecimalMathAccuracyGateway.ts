import { Decimal } from 'decimal.js';
import { MathAccuracyGatewayInterface } from '../MathAccuracy/protocol/MathAccuracyGatewayInterface';

export class DecimalMathAccuracyGateway
  implements MathAccuracyGatewayInterface
{
  decimal(value: string | number, places: number) {
    return new Decimal(value).toFixed(places, Decimal.rounding);
  }
}
