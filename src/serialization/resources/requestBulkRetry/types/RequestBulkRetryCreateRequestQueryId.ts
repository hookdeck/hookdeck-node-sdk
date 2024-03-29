/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";

export const RequestBulkRetryCreateRequestQueryId: core.serialization.Schema<
    serializers.RequestBulkRetryCreateRequestQueryId.Raw,
    Intercom.RequestBulkRetryCreateRequestQueryId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace RequestBulkRetryCreateRequestQueryId {
    type Raw = string | string[];
}
