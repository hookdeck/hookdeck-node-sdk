/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";

export const TransformationListRequestOrderBy: core.serialization.Schema<
    serializers.TransformationListRequestOrderBy.Raw,
    Intercom.TransformationListRequestOrderBy
> = core.serialization.enum_(["created_at"]);

export declare namespace TransformationListRequestOrderBy {
    type Raw = "created_at";
}
