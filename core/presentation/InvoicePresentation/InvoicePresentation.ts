import { MathAccuracyInterface } from '../../infra/gateway/MathAccuracy/protocol/MathAccuracyInterface';
import { InvoicePresentationInputInterface } from '../InvoicePresentation/InvoicePresentationInputInterface';
import { InvoicePresentationOutputInterface } from '../InvoicePresentation/InvoicePresentationOutputInterface';
import { TenantAccuracySettingsOutpurInterface } from '../settings/TenantAccuracySettings/TenantAccuracySettingsOutputInterface';

type Input = InvoicePresentationInputInterface;
type Output = InvoicePresentationOutputInterface;
type TentantAccuracyInterface = TenantAccuracySettingsOutpurInterface;

export class InvoicePresentation {
  constructor(
    private readonly _math: MathAccuracyInterface,
    private readonly _settings: TentantAccuracyInterface
  ) {}

  total(value: string | number) {
    return this._math.decimal(value, this._settings.totalsAccuracyDigits);
  }

  execute(input: Input): Readonly<Output> {
    return {
      id: input.id,
      totalAmount: this.total(input.total_amount),
      balanceDue: this.total(input.total_amount),
    };
  }
}
