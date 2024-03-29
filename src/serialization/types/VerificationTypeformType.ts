/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationTypeformType: core.serialization.Schema<
    serializers.VerificationTypeformType.Raw,
    Hookdeck.VerificationTypeformType
> = core.serialization.enum_(["typeform"]);

export declare namespace VerificationTypeformType {
    type Raw = "typeform";
}
