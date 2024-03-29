/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";
import { VerificationZoomType } from "./VerificationZoomType";
import { VerificationZoomConfigs } from "./VerificationZoomConfigs";

export const VerificationZoom: core.serialization.ObjectSchema<
    serializers.VerificationZoom.Raw,
    Intercom.VerificationZoom
> = core.serialization.object({
    type: VerificationZoomType,
    configs: VerificationZoomConfigs.optional(),
});

export declare namespace VerificationZoom {
    interface Raw {
        type: VerificationZoomType.Raw;
        configs?: VerificationZoomConfigs.Raw | null;
    }
}
