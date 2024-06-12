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
 *         cancelledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         completedAt: new Date("2024-01-15T09:30:00.000Z"),
 *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
 *         id: "string",
 *         inProgress: true,
 *         queryPartialMatch: true,
 *         orderBy: Hookdeck.RequestBulkRetryListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.RequestBulkRetryListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         cancelledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         completedAt: new Date("2024-01-15T09:30:00.000Z"),
 *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
 *         id: "string",
 *         inProgress: true,
 *         queryPartialMatch: true,
 *         orderBy: Hookdeck.RequestBulkRetryListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.RequestBulkRetryListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         cancelledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         completedAt: new Date("2024-01-15T09:30:00.000Z"),
 *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
 *         id: "string",
 *         inProgress: true,
 *         queryPartialMatch: true,
 *         orderBy: Hookdeck.RequestBulkRetryListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.RequestBulkRetryListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 */
export interface RequestBulkRetryListRequest {
    cancelledAt?: Date;
    completedAt?: Date;
    createdAt?: Date;
    id?: string | string[];
    inProgress?: boolean;
    queryPartialMatch?: boolean;
    orderBy?: Hookdeck.RequestBulkRetryListRequestOrderBy;
    dir?: Hookdeck.RequestBulkRetryListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
