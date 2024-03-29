/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";

export const AttemptStatus: core.serialization.Schema<serializers.AttemptStatus.Raw, Intercom.AttemptStatus> =
    core.serialization.enum_(["QUEUED", "FAILED", "SUCCESSFUL", "HOLD"]);

export declare namespace AttemptStatus {
    type Raw = "QUEUED" | "FAILED" | "SUCCESSFUL" | "HOLD";
}
