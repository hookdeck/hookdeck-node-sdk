/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../..";

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface SourceCreateRequest {
    /** A unique name for the source */
    name: string;
    /** Description for the source */
    description?: string;
    allowedHttpMethods?: Intercom.SourceAllowedHttpMethod | undefined;
    customResponse?: Intercom.SourceCustomResponse;
    verification?: Intercom.VerificationConfig;
}
