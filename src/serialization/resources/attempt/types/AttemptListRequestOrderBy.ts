/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";

export const AttemptListRequestOrderBy: core.serialization.Schema<
    serializers.AttemptListRequestOrderBy.Raw,
    Intercom.AttemptListRequestOrderBy
> = core.serialization.enum_(["created_at"]);

export declare namespace AttemptListRequestOrderBy {
    type Raw = "created_at";
}
