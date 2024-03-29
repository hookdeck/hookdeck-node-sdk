/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationEnodeType: core.serialization.Schema<
    serializers.VerificationEnodeType.Raw,
    Hookdeck.VerificationEnodeType
> = core.serialization.enum_(["enode"]);

export declare namespace VerificationEnodeType {
    type Raw = "enode";
}
