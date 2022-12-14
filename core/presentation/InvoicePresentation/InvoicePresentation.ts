import { MathAccuracyService } from '../../application/service/MathAccuracyService/MathAccuracy';
import { InvoicePresentationInputInterface } from '../InvoicePresentation/InvoicePresentationInputInterface';
import { InvoicePresentationOutputInterface } from '../InvoicePresentation/InvoicePresentationOutputInterface';

type Input = InvoicePresentationInputInterface;
type Output = InvoicePresentationOutputInterface;

export class InvoicePresentation {
  constructor(private readonly _accuracy: MathAccuracyService) {}

  preview(input: Partial<Input>): Readonly<Partial<Output>> {
    return {
      id: input.id,
    };
  }

  execute(input: Partial<Input>): Readonly<Output> {
    return {
      id: input.id,
      totalAmount: this._accuracy.total(input.invoice_total),
      balanceDue: this._accuracy.total(input.invoice_total),
      discountPercent: this._accuracy.percentage(input.discount_percent),
    };
  }
}
