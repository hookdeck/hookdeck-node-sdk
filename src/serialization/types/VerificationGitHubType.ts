/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationGitHubType: core.serialization.Schema<
    serializers.VerificationGitHubType.Raw,
    Hookdeck.VerificationGitHubType
> = core.serialization.enum_(["github"]);

export declare namespace VerificationGitHubType {
    type Raw = "github";
}
