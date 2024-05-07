/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const ConnectionUpsertRequestDestinationRateLimitPeriod: core.serialization.Schema<
    serializers.ConnectionUpsertRequestDestinationRateLimitPeriod.Raw,
    Hookdeck.ConnectionUpsertRequestDestinationRateLimitPeriod
> = core.serialization.enum_(["second", "minute", "hour", "concurrent"]);

export declare namespace ConnectionUpsertRequestDestinationRateLimitPeriod {
    type Raw = "second" | "minute" | "hour" | "concurrent";
}
