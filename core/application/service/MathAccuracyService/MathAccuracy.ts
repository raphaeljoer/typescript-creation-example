import { MathAccuracyInterface } from '../../../infra/gateway/MathAccuracy/protocol/MathAccuracyInterface';
import { TenantAccuracySettingsOutputInterface } from '../../../presentation/settings/TenantAccuracySettings/TenantAccuracySettingsOutputInterface';

export class MathAccuracyService {
  constructor(
    private readonly _math: MathAccuracyInterface,
    private readonly _settings: TenantAccuracySettingsOutputInterface
  ) {}

  total(value: string | number) {
    return this._math.decimal(value, this._settings.totalsAccuracyDigits);
  }

  percentage(value: string | number) {
    return this._math.decimal(value, this._settings.percentagesAccuracyDigits);
  }
}
