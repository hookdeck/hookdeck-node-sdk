/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationVercelConfigs } from "./VerificationVercelConfigs";

export const VerificationVercel: core.serialization.ObjectSchema<
    serializers.VerificationVercel.Raw,
    Hookdeck.VerificationVercel
> = core.serialization.object({
    configs: VerificationVercelConfigs.optional(),
});

export declare namespace VerificationVercel {
    interface Raw {
        configs?: VerificationVercelConfigs.Raw | null;
    }
}