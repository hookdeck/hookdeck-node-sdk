/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";
import { VerificationTwilioType } from "./VerificationTwilioType";
import { VerificationTwilioConfigs } from "./VerificationTwilioConfigs";

export const VerificationTwilio: core.serialization.ObjectSchema<
    serializers.VerificationTwilio.Raw,
    Intercom.VerificationTwilio
> = core.serialization.object({
    type: VerificationTwilioType,
    configs: VerificationTwilioConfigs.optional(),
});

export declare namespace VerificationTwilio {
    interface Raw {
        type: VerificationTwilioType.Raw;
        configs?: VerificationTwilioConfigs.Raw | null;
    }
}
