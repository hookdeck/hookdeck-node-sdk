/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationSanityType: core.serialization.Schema<
    serializers.VerificationSanityType.Raw,
    Hookdeck.VerificationSanityType
> = core.serialization.enum_(["sanity"]);

export declare namespace VerificationSanityType {
    type Raw = "sanity";
}
