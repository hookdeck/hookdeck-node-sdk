/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../..";

/**
 * @example
 *     {}
 */
export interface BookmarkListRequest {
    id?: string;
    name?: string;
    webhookId?: string;
    eventDataId?: string;
    label?: string;
    lastUsedAt?: Date;
    orderBy?: Intercom.BookmarkListRequestOrderBy;
    dir?: Intercom.BookmarkListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
