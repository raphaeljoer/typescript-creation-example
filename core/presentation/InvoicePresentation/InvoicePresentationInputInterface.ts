export type InvoicePresentationInputInterface = {
  id: string;
  external_id: string;
  vendor: Partial<VendorInterface>;
  vendor_id: string | null;
  vendor_trade_name: string | null;
  due_date: string | null;
  created_at: string;
  posting_date: string;
  discount_percent: string;
  invoice_total: string;
  invoice_total_in_system_currency: string;
  invoice_total_in_foreign_currency: string;
  total_vat_tax: string;
  total_vat_tax_in_system_currency: string;
  total_vat_tax_in_foreign_currency: string;
  vat_tax_percent: string;
  base_amount: string;
  total_discount_amount: string;
  total_discount_amount_in_system_currency: string;
  total_discount_amount_in_foreign_currency: string;
  total_down_payment_amount: string;
  total_down_payment_amount_in_system_currency: string;
  total_down_payment_amount_in_foreign_currency: string;
  paid_to_date_amount: string;
  paid_to_date_amount_in_system_currency: string;
  paid_to_date_amount_in_foreign_currency: string;
  additional_expenses: string;
  additional_expenses_in_system_currency: string;
  additional_expenses_in_foreign_currency: string;
  notes: string;
  external_ap_invoice_number: string;
  reference_number_external: string;
};

type VendorInterface = {
  id: string;
  external_id: string;
  visual_id: string;
  name: string;
  mail_to_address: string;
  bill_to_address: string;
  phone1: string;
  phone2: string;
};
