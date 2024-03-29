/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Intercom from "../../../../../api";
import * as core from "../../../../../core";
import { IssueTriggerUpdateRequestConfigs } from "../../types/IssueTriggerUpdateRequestConfigs";
import { IssueTriggerChannels } from "../../../../types/IssueTriggerChannels";

export const IssueTriggerUpdateRequest: core.serialization.Schema<
    serializers.IssueTriggerUpdateRequest.Raw,
    Intercom.IssueTriggerUpdateRequest
> = core.serialization.object({
    configs: IssueTriggerUpdateRequestConfigs.optional(),
    channels: IssueTriggerChannels.optional(),
    disabledAt: core.serialization.property("disabled_at", core.serialization.date().optional()),
    name: core.serialization.string().optional(),
});

export declare namespace IssueTriggerUpdateRequest {
    interface Raw {
        configs?: IssueTriggerUpdateRequestConfigs.Raw | null;
        channels?: IssueTriggerChannels.Raw | null;
        disabled_at?: string | null;
        name?: string | null;
    }
}
