import { MathAccuracyService } from '../../application/service/MathAccuracyService/MathAccuracy';
import { MathAccuracyInterface } from '../../infra/gateway/MathAccuracy/protocol/MathAccuracyInterface';
import { InvoicePresentationInputInterface } from '../InvoicePresentation/InvoicePresentationInputInterface';
import { InvoicePresentationOutputInterface } from '../InvoicePresentation/InvoicePresentationOutputInterface';
import { TenantAccuracySettingsOutputInterface } from '../settings/TenantAccuracySettings/TenantAccuracySettingsOutputInterface';

type Input = InvoicePresentationInputInterface;
type Output = InvoicePresentationOutputInterface;

export class InvoicePresentation {
  constructor(private readonly _math: MathAccuracyService) {}

  execute(input: Input): Readonly<Output> {
    return {
      id: input.id,
      totalAmount: this._math.total(input.total_amount),
      balanceDue: this._math.total(input.total_amount),
      percentageOfSomething: this._math.percentage(47),
    };
  }
}
