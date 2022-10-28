import { MathPrecisionInterface } from '../../infra/MathPrecision/protocol/MathPresicisionInterface';
import { InvoicePresentationInputInterface } from '../InvoicePresentation/InvoicePresentationInputInterface';
import { InvoicePresentationOutputInterface } from '../InvoicePresentation/InvoicePresentationOutputInterface';

type Input = InvoicePresentationInputInterface;
type Output = InvoicePresentationOutputInterface;

export class InvoicePresentation {
  private readonly _math: MathPrecisionInterface;

  constructor(mathPrecision: MathPrecisionInterface) {
    this._math = mathPrecision;
  }

  execute(input: Input): Readonly<Output> {
    return {
      id: input.id,
      totalAmount: input.total_amount,
      balanceDue: this._math(input.total_amount, 2, 2),
    };
  }
}
