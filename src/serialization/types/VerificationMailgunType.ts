/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";

export const VerificationMailgunType: core.serialization.Schema<
    serializers.VerificationMailgunType.Raw,
    Intercom.VerificationMailgunType
> = core.serialization.enum_(["mailgun", "MAILGUN"]);

export declare namespace VerificationMailgunType {
    type Raw = "mailgun" | "MAILGUN";
}
