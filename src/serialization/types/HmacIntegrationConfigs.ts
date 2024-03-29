/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";
import { HmacAlgorithms } from "./HmacAlgorithms";
import { HmacIntegrationConfigsEncoding } from "./HmacIntegrationConfigsEncoding";

export const HmacIntegrationConfigs: core.serialization.ObjectSchema<
    serializers.HmacIntegrationConfigs.Raw,
    Intercom.HmacIntegrationConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
    algorithm: HmacAlgorithms,
    headerKey: core.serialization.property("header_key", core.serialization.string()),
    encoding: HmacIntegrationConfigsEncoding,
});

export declare namespace HmacIntegrationConfigs {
    interface Raw {
        webhook_secret_key: string;
        algorithm: HmacAlgorithms.Raw;
        header_key: string;
        encoding: HmacIntegrationConfigsEncoding.Raw;
    }
}
