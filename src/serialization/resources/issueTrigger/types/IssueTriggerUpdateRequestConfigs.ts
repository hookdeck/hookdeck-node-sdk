/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Intercom from "../../../../api";
import * as core from "../../../../core";
import { IssueTriggerDeliveryConfigs } from "../../../types/IssueTriggerDeliveryConfigs";
import { IssueTriggerTransformationConfigs } from "../../../types/IssueTriggerTransformationConfigs";
import { IssueTriggerBackpressureConfigs } from "../../../types/IssueTriggerBackpressureConfigs";

export const IssueTriggerUpdateRequestConfigs: core.serialization.Schema<
    serializers.IssueTriggerUpdateRequestConfigs.Raw,
    Intercom.IssueTriggerUpdateRequestConfigs
> = core.serialization.undiscriminatedUnion([
    IssueTriggerDeliveryConfigs,
    IssueTriggerTransformationConfigs,
    IssueTriggerBackpressureConfigs,
]);

export declare namespace IssueTriggerUpdateRequestConfigs {
    type Raw =
        | IssueTriggerDeliveryConfigs.Raw
        | IssueTriggerTransformationConfigs.Raw
        | IssueTriggerBackpressureConfigs.Raw;
}
