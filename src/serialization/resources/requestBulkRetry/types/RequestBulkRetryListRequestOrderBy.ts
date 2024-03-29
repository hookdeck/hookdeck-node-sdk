/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";

export const RequestBulkRetryListRequestOrderBy: core.serialization.Schema<
    serializers.RequestBulkRetryListRequestOrderBy.Raw,
    Intercom.RequestBulkRetryListRequestOrderBy
> = core.serialization.enum_(["created_at"]);

export declare namespace RequestBulkRetryListRequestOrderBy {
    type Raw = "created_at";
}
