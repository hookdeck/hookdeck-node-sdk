/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";
import { VerificationSquareType } from "./VerificationSquareType";
import { VerificationSquareConfigs } from "./VerificationSquareConfigs";

export const VerificationSquare: core.serialization.ObjectSchema<
    serializers.VerificationSquare.Raw,
    Intercom.VerificationSquare
> = core.serialization.object({
    type: VerificationSquareType,
    configs: VerificationSquareConfigs.optional(),
});

export declare namespace VerificationSquare {
    interface Raw {
        type: VerificationSquareType.Raw;
        configs?: VerificationSquareConfigs.Raw | null;
    }
}
