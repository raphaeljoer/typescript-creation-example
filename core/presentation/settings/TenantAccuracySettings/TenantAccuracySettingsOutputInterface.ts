export interface TenantAccuracySettingsOutputInterface {
  localCurrencyId: string | null;
  localCurrencyExternalId: string | null;
  systemCurrencyId: string | null;
  systemCurrencyExternalId: string | null;
  totalsAccuracyDigits: number | null;
  quantitiesAccuracyDigits: number | null;
  pricesAccuracyDigits: number | null;
  ratesAccuracyDigits: number | null;
  percentagesAccuracyDigits: number | null;
  measuringUnitsAccuracyDigits: number | null;
  queryAccuracyDigits: number | null;
  decimalSeparator: string | null;
  thousandsSeparator: string | null;
  displayCurrencyOnTheRight: boolean;
  roundingMethod: boolean;
}
