import { DecimalMathPrecision } from './core/infra/MathPrecision/DecimalMathPrecision';
import { InvoicePresentation } from './core/presentation/InvoicePresentation/InvoicePresentation';

const decimal = new DecimalMathPrecision();
const invoicePresentation = new InvoicePresentation(decimal);
const output = invoicePresentation.execute({ id: '123', total_amount: 1250 });

console.log(output);
