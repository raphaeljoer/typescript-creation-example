import { TenantAccuracySettingsInputInterface } from '../TenantAccuracySettings/TenantAccuracySettingsInputInterface';
import { TenantAccuracySettingsOutpurInterface } from '../TenantAccuracySettings/TenantAccuracySettingsOutputInterface';

type Input = TenantAccuracySettingsInputInterface;
type Output = TenantAccuracySettingsOutpurInterface;

export class TentantAccuracySettings {
  execute(input: Input): Readonly<Output> {
    return {
      decimalSeparator: input.decimal_separator,
      displayCurrencyOnTheRight: input.display_currency_on_the_right,
      localCurrencyExternalId: input.local_currency_external_id,
      localCurrencyId: input.local_currency_id,
      measuringUnitsAccuracyDigits: input.measuring_units_accuracy_digits,
      percentagesAccuracyDigits: input.percentages_accuracy_digits,
      pricesAccuracyDigits: input.prices_accuracy_digits,
      quantitiesAccuracyDigits: input.quantities_accuracy_digits,
      queryAccuracyDigits: input.query_accuracy_digits,
      ratesAccuracyDigits: input.rates_accuracy_digits,
      roundingMethod: input.rounding_method,
      systemCurrencyExternalId: input.system_currency_external_id,
      systemCurrencyId: input.system_currency_id,
      thousandsSeparator: input.thousands_separator,
      totalsAccuracyDigits: input.totals_accuracy_digits,
    };
  }
}
