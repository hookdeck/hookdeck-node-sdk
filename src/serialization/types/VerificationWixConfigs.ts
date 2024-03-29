/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";

export const VerificationWixConfigs: core.serialization.ObjectSchema<
    serializers.VerificationWixConfigs.Raw,
    Intercom.VerificationWixConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationWixConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
