/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

/**
 * Transformation issue
 */
export interface TransformationIssue {
    /** Issue ID */
    id: string;
    /** ID of the project */
    teamId: string;
    status: Hookdeck.IssueStatus;
    /** ISO timestamp for when the issue was last opened */
    openedAt: Date;
    /** ISO timestamp for when the issue was first opened */
    firstSeenAt: Date;
    /** ISO timestamp for when the issue last occured */
    lastSeenAt: Date;
    /** Deprecated, will always be set to null */
    lastUpdatedBy?: string;
    /** ISO timestamp for when the issue was dismissed */
    dismissedAt?: Date;
    autoResolvedAt?: Date;
    mergedWith?: string;
    /** ISO timestamp for when the issue was last updated */
    updatedAt: string;
    /** ISO timestamp for when the issue was created */
    createdAt: string;
    aggregationKeys: Hookdeck.TransformationIssueAggregationKeys;
    reference: Hookdeck.TransformationIssueReference;
}
