/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";

export const VerificationShoplineType: core.serialization.Schema<
    serializers.VerificationShoplineType.Raw,
    Intercom.VerificationShoplineType
> = core.serialization.enum_(["shopline", "SHOPLINE"]);

export declare namespace VerificationShoplineType {
    type Raw = "shopline" | "SHOPLINE";
}
