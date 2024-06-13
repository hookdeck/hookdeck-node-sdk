/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ConnectionCreateRequest {
    /** A unique name of the connection for the source */
    name?: string;
    /** Description for the connection */
    description?: string;
    /** ID of a destination to bind to the connection */
    destinationId?: string;
    /** ID of a source to bind to the connection */
    sourceId?: string;
    /** Destination input object */
    destination?: Hookdeck.ConnectionCreateRequestDestination;
    /** Source input object */
    source?: Hookdeck.ConnectionCreateRequestSource;
    rules?: Hookdeck.Rule[];
}
