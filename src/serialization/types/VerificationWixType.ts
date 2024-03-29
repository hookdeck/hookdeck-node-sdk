/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationWixType: core.serialization.Schema<
    serializers.VerificationWixType.Raw,
    Hookdeck.VerificationWixType
> = core.serialization.enum_(["wix"]);

export declare namespace VerificationWixType {
    type Raw = "wix";
}
