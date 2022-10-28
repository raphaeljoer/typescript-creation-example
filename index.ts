import { MathAccuracyService } from './core/application/service/MathAccuracyService/MathAccuracy';
import { DecimalMathAccuracy } from './core/infra/gateway/MathAccuracy/DecimalMathAccuracy';
import { InvoicePresentation } from './core/presentation/InvoicePresentation/InvoicePresentation';
import { TentantAccuracySettings } from './core/presentation/settings/TenantAccuracySettings/TenantAccuracySettings';
import { invoiceDataInput } from './data/invoiceDataInput';
import { tenantSettingsDataInput } from './data/tenantSettingsDataInput';

const tentantAccuracySettings = new TentantAccuracySettings();
const settings = tentantAccuracySettings.execute(tenantSettingsDataInput);
const decimal = new DecimalMathAccuracy();
const mathAccuracyService = new MathAccuracyService(decimal, settings);
const invoicePresentation = new InvoicePresentation(mathAccuracyService);

const fullInvoice = invoicePresentation.execute(invoiceDataInput);
const previewInvoice = invoicePresentation.preview(invoiceDataInput);

console.log(fullInvoice);
console.log(previewInvoice);
