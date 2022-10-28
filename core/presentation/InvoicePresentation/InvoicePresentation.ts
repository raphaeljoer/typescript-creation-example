import { MathAccuracyService } from '../../application/service/MathAccuracyService/MathAccuracy';
import { InvoicePresentationInputInterface } from '../InvoicePresentation/InvoicePresentationInputInterface';
import { InvoicePresentationOutputInterface } from '../InvoicePresentation/InvoicePresentationOutputInterface';

type Input = InvoicePresentationInputInterface;
type Output = InvoicePresentationOutputInterface;

export class InvoicePresentation {
  constructor(private readonly _math: MathAccuracyService) {}

  execute(input: Input): Readonly<Output> {
    return {
      id: input.id,
      totalAmount: this._math.total(input.invoice_total),
      balanceDue: this._math.total(input.invoice_total),
      percentageOfSomething: this._math.percentage(47),
    };
  }
}
