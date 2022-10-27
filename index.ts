type InvoiceInput = {
  id: string;
  total_amount: number;
};

interface IInvoice {
  id: string;
  totalAmount: number;
}

export class Invoice implements IInvoice {
  id: string;
  totalAmount: number;

  private constructor(input: InvoiceInput) {
    this.id = input.id;
    this.totalAmount = input.total_amount;
  }

  static create(input: InvoiceInput): Readonly<IInvoice> {
    const invoice = new Invoice(input);
    return JSON.parse(JSON.stringify(invoice));
  }
}

const input: InvoiceInput = {
  id: '123',
  total_amount: 1250,
};

const invoice = Invoice.create(input);

invoice.id = 87474;

console.log(invoice);
