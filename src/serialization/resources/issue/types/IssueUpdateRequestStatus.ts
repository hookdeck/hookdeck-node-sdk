/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";

export const IssueUpdateRequestStatus: core.serialization.Schema<
    serializers.IssueUpdateRequestStatus.Raw,
    Intercom.IssueUpdateRequestStatus
> = core.serialization.enum_(["OPENED", "IGNORED", "ACKNOWLEDGED", "RESOLVED"]);

export declare namespace IssueUpdateRequestStatus {
    type Raw = "OPENED" | "IGNORED" | "ACKNOWLEDGED" | "RESOLVED";
}
