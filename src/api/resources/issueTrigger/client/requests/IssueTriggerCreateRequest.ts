/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {
 *         type: Hookdeck.IssueType.Delivery
 *     }
 */
export interface IssueTriggerCreateRequest {
    type: Hookdeck.IssueType;
    /** Configuration object for the specific issue type selected */
    configs?: Hookdeck.IssueTriggerCreateRequestConfigs;
    channels?: Hookdeck.IssueTriggerChannels;
    /** Optional unique name to use as reference when using the API */
    name?: string;
}
