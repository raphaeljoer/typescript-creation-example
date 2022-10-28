export interface MathAccuracyGatewayInterface {
  decimal: (value: string | number, places: number) => string;
}
