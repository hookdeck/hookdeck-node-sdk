/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VercelLogDrainsIntegrationConfigs: core.serialization.ObjectSchema<
    serializers.VercelLogDrainsIntegrationConfigs.Raw,
    Hookdeck.VercelLogDrainsIntegrationConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string().optional()),
    vercelLogDrainsSecret: core.serialization.property("vercel_log_drains_secret", core.serialization.string()),
});

export declare namespace VercelLogDrainsIntegrationConfigs {
    interface Raw {
        webhook_secret_key?: string | null;
        vercel_log_drains_secret: string;
    }
}