import { MathAccuracyService } from './core/application/service/MathAccuracyService/MathAccuracy';
import { DecimalMathAccuracyGateway } from './core/infra/gateway/MathAccuracyGateway/DecimalMathAccuracyGateway';
import { InvoicePresentation } from './core/presentation/InvoicePresentation/InvoicePresentation';
import { TentantAccuracySettings } from './core/presentation/settings/TenantAccuracySettings/TenantAccuracySettings';
import { invoiceDataInput } from './data/invoiceDataInput';
import { tenantSettingsDataInput } from './data/tenantSettingsDataInput';

const tentantAccuracySettings = new TentantAccuracySettings();
const settings = tentantAccuracySettings.execute(tenantSettingsDataInput);

const decimal = new DecimalMathAccuracyGateway();
const mathAccuracyService = new MathAccuracyService(decimal, settings);

const invoicePresentation = new InvoicePresentation(mathAccuracyService);

const fullInvoice = invoicePresentation.execute(invoiceDataInput);
const previewInvoice = invoicePresentation.preview(invoiceDataInput);

console.log(fullInvoice);
console.log(previewInvoice);
