/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../..";

/**
 * @example
 *     {}
 */
export interface DestinationUpdateRequest {
    /** Name for the destination */
    name?: string;
    /** Description for the destination */
    description?: string;
    /** Endpoint of the destination */
    url?: string;
    /** Path for the CLI destination */
    cliPath?: string;
    /** Period to rate limit attempts */
    rateLimitPeriod?: Intercom.DestinationUpdateRequestRateLimitPeriod;
    /** Limit event attempts to receive per period */
    rateLimit?: number;
    httpMethod?: Intercom.DestinationHttpMethod;
    authMethod?: Intercom.DestinationAuthMethodConfig;
    pathForwardingDisabled?: boolean;
}
