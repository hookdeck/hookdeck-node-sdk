/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../..";

/**
 * @example
 *     {}
 */
export interface EventListRequest {
    id?: string;
    status?: Intercom.EventStatus;
    webhookId?: string;
    destinationId?: string;
    sourceId?: string;
    attempts?: number;
    responseStatus?: number;
    successfulAt?: Date;
    createdAt?: Date;
    errorCode?: Intercom.AttemptErrorCodes;
    cliId?: string;
    lastAttemptAt?: Date;
    searchTerm?: string;
    headers?: string;
    body?: string;
    parsedQuery?: string;
    path?: string;
    cliUserId?: string;
    issueId?: string;
    eventDataId?: string;
    bulkRetryId?: string;
    include?: "data";
    orderBy?: Intercom.EventListRequestOrderBy;
    dir?: Intercom.EventListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
