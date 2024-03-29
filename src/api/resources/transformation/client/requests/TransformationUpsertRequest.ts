/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "name",
 *         code: "code"
 *     }
 */
export interface TransformationUpsertRequest {
    /** A unique, human-friendly name for the transformation */
    name: string;
    /** JavaScript code to be executed as string */
    code: string;
    /** Key-value environment variables to be passed to the transformation */
    env?: Record<string, string>;
}
