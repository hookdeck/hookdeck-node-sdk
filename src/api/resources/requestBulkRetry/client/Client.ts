/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Hookdeck from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace RequestBulkRetry {
    interface Options {
        environment?: core.Supplier<environments.HookdeckEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class RequestBulkRetry {
    constructor(protected readonly _options: RequestBulkRetry.Options) {}

    /**
     *
     *
     * @param {Hookdeck.RequestBulkRetryListRequest} request
     * @param {RequestBulkRetry.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.requestBulkRetry.list()
     */
    public async list(
        request: Hookdeck.RequestBulkRetryListRequest = {},
        requestOptions?: RequestBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperationPaginatedResult> {
        const {
            cancelledAt,
            completedAt,
            createdAt,
            id,
            inProgress,
            queryPartialMatch,
            orderBy,
            dir,
            limit,
            next,
            prev,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (cancelledAt != null) {
            _queryParams["cancelled_at"] = cancelledAt.toISOString();
        }

        if (completedAt != null) {
            _queryParams["completed_at"] = completedAt.toISOString();
        }

        if (createdAt != null) {
            _queryParams["created_at"] = createdAt.toISOString();
        }

        if (id != null) {
            if (Array.isArray(id)) {
                _queryParams["id"] = id.map((item) => item);
            } else {
                _queryParams["id"] = id;
            }
        }

        if (inProgress != null) {
            _queryParams["in_progress"] = inProgress.toString();
        }

        if (queryPartialMatch != null) {
            _queryParams["query_partial_match"] = queryPartialMatch.toString();
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (dir != null) {
            _queryParams["dir"] = dir;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (next != null) {
            _queryParams["next"] = next;
        }

        if (prev != null) {
            _queryParams["prev"] = prev;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "bulk/requests/retry"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.BatchOperationPaginatedResult.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {Hookdeck.RequestBulkRetryCreateRequest} request
     * @param {RequestBulkRetry.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.requestBulkRetry.create()
     */
    public async create(
        request: Hookdeck.RequestBulkRetryCreateRequest = {},
        requestOptions?: RequestBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperation> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "bulk/requests/retry"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.RequestBulkRetryCreateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.BatchOperation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {RequestBulkRetry.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.requestBulkRetry.plan()
     */
    public async plan(
        requestOptions?: RequestBulkRetry.RequestOptions
    ): Promise<Hookdeck.RequestBulkRetryPlanResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "bulk/requests/retry/plan"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.RequestBulkRetryPlanResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {string} id
     * @param {RequestBulkRetry.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.requestBulkRetry.retrieve("id")
     */
    public async retrieve(
        id: string,
        requestOptions?: RequestBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperation> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `bulk/requests/retry/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.BatchOperation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Hookdeck.NotFoundError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {string} id
     * @param {RequestBulkRetry.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.requestBulkRetry.cancel("id")
     */
    public async cancel(
        id: string,
        requestOptions?: RequestBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperation> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `bulk/requests/retry/${encodeURIComponent(id)}/cancel`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.BatchOperation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Hookdeck.NotFoundError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
