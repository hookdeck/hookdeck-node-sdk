/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "..";

/**
 * Configurations for a 'delivery' issue trigger
 */
export interface IssueTriggerDeliveryConfigs {
    strategy: Intercom.IssueTriggerStrategy;
    /** A pattern to match on the connection name or array of connection IDs. Use `*` as wildcard. */
    connections: Intercom.IssueTriggerDeliveryConfigsConnections;
}
