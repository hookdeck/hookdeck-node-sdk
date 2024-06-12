/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationSolidGateConfigs } from "./VerificationSolidGateConfigs";

export const VerificationSolidGate: core.serialization.ObjectSchema<
    serializers.VerificationSolidGate.Raw,
    Hookdeck.VerificationSolidGate
> = core.serialization.object({
    configs: VerificationSolidGateConfigs.optional(),
});

export declare namespace VerificationSolidGate {
    interface Raw {
        configs?: VerificationSolidGateConfigs.Raw | null;
    }
}
