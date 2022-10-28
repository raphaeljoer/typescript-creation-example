import { MathAccuracyInterface } from '../../infra/gateway/MathAccuracy/protocol/MathAccuracyInterface';
import { InvoicePresentationInputInterface } from '../InvoicePresentation/InvoicePresentationInputInterface';
import { InvoicePresentationOutputInterface } from '../InvoicePresentation/InvoicePresentationOutputInterface';
import { TentantAccuracySettings } from '../settings/TenantAccuracySettings/TenantAccuracySettings';
import { TenantAccuracySettingsOutpurInterface } from '../settings/TenantAccuracySettings/TenantAccuracySettingsOutputInterface';

type Input = InvoicePresentationInputInterface;
type Output = InvoicePresentationOutputInterface;
type TentantAccuracyInterface = TenantAccuracySettingsOutpurInterface;

export class InvoicePresentation {
  constructor(
    private readonly _math: MathAccuracyInterface,
    private readonly _settings: TentantAccuracySettings
  ) {}

  execute(input: Input): Readonly<Output> {
    return {
      id: input.id,
      totalAmount: this._math.decimal(input.total_amount, 2),
      balanceDue: this._math.decimal(input.total_amount, 3),
    };
  }
}
