/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";
import { IgnoredEventBulkRetryCreateRequestQueryCause } from "./IgnoredEventBulkRetryCreateRequestQueryCause";
import { IgnoredEventBulkRetryCreateRequestQueryWebhookId } from "./IgnoredEventBulkRetryCreateRequestQueryWebhookId";

export const IgnoredEventBulkRetryCreateRequestQuery: core.serialization.ObjectSchema<
    serializers.IgnoredEventBulkRetryCreateRequestQuery.Raw,
    Intercom.IgnoredEventBulkRetryCreateRequestQuery
> = core.serialization.object({
    cause: IgnoredEventBulkRetryCreateRequestQueryCause.optional(),
    webhookId: core.serialization.property("webhook_id", IgnoredEventBulkRetryCreateRequestQueryWebhookId.optional()),
    transformationId: core.serialization.property("transformation_id", core.serialization.string().optional()),
});

export declare namespace IgnoredEventBulkRetryCreateRequestQuery {
    interface Raw {
        cause?: IgnoredEventBulkRetryCreateRequestQueryCause.Raw | null;
        webhook_id?: IgnoredEventBulkRetryCreateRequestQueryWebhookId.Raw | null;
        transformation_id?: string | null;
    }
}
