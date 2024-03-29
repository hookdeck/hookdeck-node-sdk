/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Intercom from "../../api";
import * as core from "../../core";

export const ListCustomDomainSchemaItemSslValidationRecordsItem: core.serialization.ObjectSchema<
    serializers.ListCustomDomainSchemaItemSslValidationRecordsItem.Raw,
    Intercom.ListCustomDomainSchemaItemSslValidationRecordsItem
> = core.serialization.object({
    status: core.serialization.string().optional(),
    txtName: core.serialization.property("txt_name", core.serialization.string().optional()),
    txtValue: core.serialization.property("txt_value", core.serialization.string().optional()),
});

export declare namespace ListCustomDomainSchemaItemSslValidationRecordsItem {
    interface Raw {
        status?: string | null;
        txt_name?: string | null;
        txt_value?: string | null;
    }
}
