/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";
import { FilteredMeta } from "./FilteredMeta";
import { TransformationFailedMeta } from "./TransformationFailedMeta";

export const IgnoredEventMeta: core.serialization.Schema<serializers.IgnoredEventMeta.Raw, Intercom.IgnoredEventMeta> =
    core.serialization.undiscriminatedUnion([FilteredMeta, TransformationFailedMeta]);

export declare namespace IgnoredEventMeta {
    type Raw = FilteredMeta.Raw | TransformationFailedMeta.Raw;
}
