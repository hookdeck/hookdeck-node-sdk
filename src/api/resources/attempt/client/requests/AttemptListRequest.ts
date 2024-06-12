/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {}
 *
 * @example
 *     {
 *         eventId: "string",
 *         orderBy: Hookdeck.AttemptListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.AttemptListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         eventId: "string",
 *         orderBy: Hookdeck.AttemptListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.AttemptListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         eventId: "string",
 *         orderBy: Hookdeck.AttemptListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.AttemptListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 */
export interface AttemptListRequest {
    eventId?: string | string[];
    orderBy?: Hookdeck.AttemptListRequestOrderBy;
    dir?: Hookdeck.AttemptListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
