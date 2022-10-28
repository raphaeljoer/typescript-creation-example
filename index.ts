import { DecimalMathAccuracy } from './core/infra/gateway/MathAccuracy/DecimalMathAccuracy';
import { InvoicePresentation } from './core/presentation/InvoicePresentation/InvoicePresentation';
import { TentantAccuracySettings } from './core/presentation/settings/TenantAccuracySettings/TenantAccuracySettings';
import { tenantSettingsDataInput } from './data/tenantSettingsDataInput';

const tentantAccuracySettings = new TentantAccuracySettings();
const settings = tentantAccuracySettings.execute(tenantSettingsDataInput);

const decimal = new DecimalMathAccuracy();
const invoicePresentation = new InvoicePresentation(decimal, settings);

const output = invoicePresentation.execute({ id: '123', total_amount: 1250 });

console.log(output);
