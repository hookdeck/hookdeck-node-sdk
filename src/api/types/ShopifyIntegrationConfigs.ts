/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "..";

export interface ShopifyIntegrationConfigs {
    webhookSecretKey: string;
    rateLimitPeriod?: Intercom.ShopifyIntegrationConfigsRateLimitPeriod;
    rateLimit?: number;
    apiKey?: string;
    apiSecret?: string;
    shop?: string;
}
