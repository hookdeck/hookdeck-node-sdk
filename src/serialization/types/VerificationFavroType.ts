/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";

export const VerificationFavroType: core.serialization.Schema<
    serializers.VerificationFavroType.Raw,
    Intercom.VerificationFavroType
> = core.serialization.enum_(["favro", "FAVRO"]);

export declare namespace VerificationFavroType {
    type Raw = "favro" | "FAVRO";
}
