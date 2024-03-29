/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";
import { RequestBulkRetryCreateRequestQueryIgnoredCountAll } from "./RequestBulkRetryCreateRequestQueryIgnoredCountAll";

export const RequestBulkRetryCreateRequestQueryIgnoredCount: core.serialization.Schema<
    serializers.RequestBulkRetryCreateRequestQueryIgnoredCount.Raw,
    Intercom.RequestBulkRetryCreateRequestQueryIgnoredCount
> = core.serialization.undiscriminatedUnion([
    core.serialization.number(),
    RequestBulkRetryCreateRequestQueryIgnoredCountAll,
    core.serialization.list(core.serialization.number()),
]);

export declare namespace RequestBulkRetryCreateRequestQueryIgnoredCount {
    type Raw = number | RequestBulkRetryCreateRequestQueryIgnoredCountAll.Raw | number[];
}
