/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "..";

export type IssueWithData = Intercom.IssueWithData.Delivery | Intercom.IssueWithData.Transformation;

export declare namespace IssueWithData {
    interface Delivery extends Intercom.DeliveryIssueWithData {
        type: "delivery";
    }

    interface Transformation extends Intercom.TransformationIssueWithData {
        type: "transformation";
    }
}
