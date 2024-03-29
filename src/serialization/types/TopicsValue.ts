/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";

export const TopicsValue: core.serialization.Schema<serializers.TopicsValue.Raw, Intercom.TopicsValue> =
    core.serialization.enum_(["issue.opened", "issue.updated", "deprecated.attempt-failed", "event.successful"]);

export declare namespace TopicsValue {
    type Raw = "issue.opened" | "issue.updated" | "deprecated.attempt-failed" | "event.successful";
}
