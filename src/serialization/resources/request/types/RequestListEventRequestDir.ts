/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";

export const RequestListEventRequestDir: core.serialization.Schema<
    serializers.RequestListEventRequestDir.Raw,
    Intercom.RequestListEventRequestDir
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace RequestListEventRequestDir {
    type Raw = "asc" | "desc";
}
