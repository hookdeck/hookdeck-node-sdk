/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";
import { DeliveryIssue } from "./DeliveryIssue";
import { TransformationIssue } from "./TransformationIssue";

export const Issue: core.serialization.Schema<serializers.Issue.Raw, Intercom.Issue> = core.serialization
    .union("type", {
        delivery: DeliveryIssue,
        transformation: TransformationIssue,
    })
    .transform<Intercom.Issue>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Issue {
    type Raw = Issue.Delivery | Issue.Transformation;

    interface Delivery extends DeliveryIssue.Raw {
        type: "delivery";
    }

    interface Transformation extends TransformationIssue.Raw {
        type: "transformation";
    }
}
