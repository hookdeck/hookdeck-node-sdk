/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";
import { SeekPagination } from "./SeekPagination";
import { Transformation } from "./Transformation";

export const TransformationPaginatedResult: core.serialization.ObjectSchema<
    serializers.TransformationPaginatedResult.Raw,
    Intercom.TransformationPaginatedResult
> = core.serialization.object({
    pagination: SeekPagination.optional(),
    count: core.serialization.number().optional(),
    models: core.serialization.list(Transformation).optional(),
});

export declare namespace TransformationPaginatedResult {
    interface Raw {
        pagination?: SeekPagination.Raw | null;
        count?: number | null;
        models?: Transformation.Raw[] | null;
    }
}
