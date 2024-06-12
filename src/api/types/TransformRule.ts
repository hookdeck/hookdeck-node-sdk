/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

export interface TransformRule {
    /** ID of the attached transformation object. Optional input, always set once the rule is defined */
    transformationId?: string;
    /** You can optionally define a new transformation while creating a transform rule */
    transformation?: Hookdeck.TransformRuleTransformation;
}
