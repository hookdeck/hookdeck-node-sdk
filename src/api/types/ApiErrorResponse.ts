/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "..";

/**
 * Error response model
 */
export interface ApiErrorResponse {
    /** Error code */
    code: string;
    /** Status code */
    status: number;
    /** Error description */
    message: string;
    data?: Intercom.ApiErrorResponseData;
}
