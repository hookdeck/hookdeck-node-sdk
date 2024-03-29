/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Intercom from "../../../../../api";
import * as core from "../../../../../core";
import { DestinationUpsertRequestRateLimitPeriod } from "../../types/DestinationUpsertRequestRateLimitPeriod";
import { DestinationHttpMethod } from "../../../../types/DestinationHttpMethod";
import { DestinationAuthMethodConfig } from "../../../../types/DestinationAuthMethodConfig";

export const DestinationUpsertRequest: core.serialization.Schema<
    serializers.DestinationUpsertRequest.Raw,
    Intercom.DestinationUpsertRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    cliPath: core.serialization.property("cli_path", core.serialization.string().optional()),
    rateLimitPeriod: core.serialization.property(
        "rate_limit_period",
        DestinationUpsertRequestRateLimitPeriod.optional()
    ),
    rateLimit: core.serialization.property("rate_limit", core.serialization.number().optional()),
    httpMethod: core.serialization.property("http_method", DestinationHttpMethod.optional()),
    authMethod: core.serialization.property("auth_method", DestinationAuthMethodConfig.optional()),
    pathForwardingDisabled: core.serialization.property(
        "path_forwarding_disabled",
        core.serialization.boolean().optional()
    ),
});

export declare namespace DestinationUpsertRequest {
    interface Raw {
        name: string;
        description?: string | null;
        url?: string | null;
        cli_path?: string | null;
        rate_limit_period?: DestinationUpsertRequestRateLimitPeriod.Raw | null;
        rate_limit?: number | null;
        http_method?: DestinationHttpMethod.Raw | null;
        auth_method?: DestinationAuthMethodConfig.Raw | null;
        path_forwarding_disabled?: boolean | null;
    }
}
