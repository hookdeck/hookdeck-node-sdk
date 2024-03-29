/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../..";

/**
 * @example
 *     {}
 */
export interface ConnectionListRequest {
    id?: string;
    name?: string;
    destinationId?: string;
    sourceId?: string;
    disabled?: boolean;
    disabledAt?: Date;
    fullName?: string;
    pausedAt?: Date;
    orderBy?: Intercom.ConnectionListRequestOrderBy;
    dir?: Intercom.ConnectionListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
