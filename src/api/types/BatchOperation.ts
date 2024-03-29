/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "..";

export interface BatchOperation {
    /** ID of the bulk retry */
    id: string;
    /** ID of the workspace */
    teamId: string;
    /** Query object to filter records */
    query?: Intercom.BatchOperationQuery;
    /** Date the bulk retry was created */
    createdAt: Date;
    /** Last time the bulk retry was updated */
    updatedAt: Date;
    /** Date the bulk retry was cancelled */
    cancelledAt?: Date;
    /** Date the bulk retry was completed */
    completedAt?: Date;
    /** Number of batches required to complete the bulk retry */
    estimatedBatch?: number;
    /** Number of estimated events to be retried */
    estimatedCount?: number;
    /** Number of batches currently processed */
    processedBatch?: number;
    /** Number of events that were successfully delivered */
    completedCount?: number;
    /** Indicates if the bulk retry is currently in progress */
    inProgress: boolean;
    /** Progression of the batch operations, values 0 - 1 */
    progress?: number;
    /** Number of events that failed to be delivered */
    failedCount?: number;
    number?: number;
}
