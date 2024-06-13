/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Hookdeck from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Request {
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

export class Request {
    constructor(protected readonly _options: Request.Options) {}

    /**
     *
     *
     * @param {Hookdeck.RequestListRequest} request
     * @param {Request.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.request.list()
     */
    public async list(
        request: Hookdeck.RequestListRequest = {},
        requestOptions?: Request.RequestOptions
    ): Promise<Hookdeck.RequestPaginatedResult> {
        const {
            id,
            status,
            rejectionCause,
            sourceId,
            verified,
            searchTerm,
            headers,
            body,
            parsedQuery,
            path,
            ignoredCount,
            eventsCount,
            ingestedAt,
            bulkRetryId,
            include,
            orderBy,
            dir,
            limit,
            next,
            prev,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (id != null) {
            if (Array.isArray(id)) {
                _queryParams["id"] = id.map((item) => item);
            } else {
                _queryParams["id"] = id;
            }
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (rejectionCause != null) {
            _queryParams["rejection_cause"] = rejectionCause;
        }

        if (sourceId != null) {
            if (Array.isArray(sourceId)) {
                _queryParams["source_id"] = sourceId.map((item) => item);
            } else {
                _queryParams["source_id"] = sourceId;
            }
        }

        if (verified != null) {
            _queryParams["verified"] = verified.toString();
        }

        if (searchTerm != null) {
            _queryParams["search_term"] = searchTerm;
        }

        if (headers != null) {
            _queryParams["headers"] = headers;
        }

        if (body != null) {
            _queryParams["body"] = body;
        }

        if (parsedQuery != null) {
            _queryParams["parsed_query"] = parsedQuery;
        }

        if (path != null) {
            _queryParams["path"] = path;
        }

        if (ignoredCount != null) {
            _queryParams["ignored_count"] = ignoredCount.toString();
        }

        if (eventsCount != null) {
            _queryParams["events_count"] = eventsCount.toString();
        }

        if (ingestedAt != null) {
            _queryParams["ingested_at"] = ingestedAt.toISOString();
        }

        if (bulkRetryId != null) {
            if (Array.isArray(bulkRetryId)) {
                _queryParams["bulk_retry_id"] = bulkRetryId.map((item) => item);
            } else {
                _queryParams["bulk_retry_id"] = bulkRetryId;
            }
        }

        if (include != null) {
            _queryParams["include"] = include;
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
                "requests"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0-beta.3",
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
            return await serializers.RequestPaginatedResult.parseOrThrow(_response.body, {
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
     * @param {Request.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.request.retrieve("id")
     */
    public async retrieve(id: string, requestOptions?: Request.RequestOptions): Promise<Hookdeck.Request> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `requests/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0-beta.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Request.parseOrThrow(_response.body, {
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
     * @param {Request.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.request.retrieveBody("id")
     */
    public async retrieveBody(id: string, requestOptions?: Request.RequestOptions): Promise<Hookdeck.RawBody> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `requests/${encodeURIComponent(id)}/raw_body`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0-beta.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.RawBody.parseOrThrow(_response.body, {
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
     * @param {Hookdeck.RequestRetryRequest} request
     * @param {Request.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.NotFoundError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.request.retry("id", {
     *         webhookIds: ["webhook_ids"]
     *     })
     */
    public async retry(
        id: string,
        request: Hookdeck.RequestRetryRequest,
        requestOptions?: Request.RequestOptions
    ): Promise<Hookdeck.RetryRequest> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `requests/${encodeURIComponent(id)}/retry`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0-beta.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.RequestRetryRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.RetryRequest.parseOrThrow(_response.body, {
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
     * @param {Hookdeck.RequestListEventRequest} request
     * @param {Request.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.NotFoundError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.request.listEvent("id")
     */
    public async listEvent(
        id: string,
        request: Hookdeck.RequestListEventRequest = {},
        requestOptions?: Request.RequestOptions
    ): Promise<Hookdeck.EventPaginatedResult> {
        const {
            id: id_,
            status,
            webhookId,
            destinationId,
            sourceId,
            attempts,
            responseStatus,
            successfulAt,
            createdAt,
            errorCode,
            cliId,
            lastAttemptAt,
            searchTerm,
            headers,
            body,
            parsedQuery,
            path,
            cliUserId,
            issueId,
            eventDataId,
            bulkRetryId,
            include,
            orderBy,
            dir,
            limit,
            next,
            prev,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (id_ != null) {
            if (Array.isArray(id_)) {
                _queryParams["id"] = id_.map((item) => item);
            } else {
                _queryParams["id"] = id_;
            }
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (webhookId != null) {
            if (Array.isArray(webhookId)) {
                _queryParams["webhook_id"] = webhookId.map((item) => item);
            } else {
                _queryParams["webhook_id"] = webhookId;
            }
        }

        if (destinationId != null) {
            if (Array.isArray(destinationId)) {
                _queryParams["destination_id"] = destinationId.map((item) => item);
            } else {
                _queryParams["destination_id"] = destinationId;
            }
        }

        if (sourceId != null) {
            if (Array.isArray(sourceId)) {
                _queryParams["source_id"] = sourceId.map((item) => item);
            } else {
                _queryParams["source_id"] = sourceId;
            }
        }

        if (attempts != null) {
            _queryParams["attempts"] = attempts.toString();
        }

        if (responseStatus != null) {
            _queryParams["response_status"] = responseStatus.toString();
        }

        if (successfulAt != null) {
            _queryParams["successful_at"] = successfulAt.toISOString();
        }

        if (createdAt != null) {
            _queryParams["created_at"] = createdAt.toISOString();
        }

        if (errorCode != null) {
            _queryParams["error_code"] = errorCode;
        }

        if (cliId != null) {
            _queryParams["cli_id"] = cliId;
        }

        if (lastAttemptAt != null) {
            _queryParams["last_attempt_at"] = lastAttemptAt.toISOString();
        }

        if (searchTerm != null) {
            _queryParams["search_term"] = searchTerm;
        }

        if (headers != null) {
            _queryParams["headers"] = headers;
        }

        if (body != null) {
            _queryParams["body"] = body;
        }

        if (parsedQuery != null) {
            _queryParams["parsed_query"] = parsedQuery;
        }

        if (path != null) {
            _queryParams["path"] = path;
        }

        if (cliUserId != null) {
            if (Array.isArray(cliUserId)) {
                _queryParams["cli_user_id"] = cliUserId.map((item) => item);
            } else {
                _queryParams["cli_user_id"] = cliUserId;
            }
        }

        if (issueId != null) {
            if (Array.isArray(issueId)) {
                _queryParams["issue_id"] = issueId.map((item) => item);
            } else {
                _queryParams["issue_id"] = issueId;
            }
        }

        if (eventDataId != null) {
            if (Array.isArray(eventDataId)) {
                _queryParams["event_data_id"] = eventDataId.map((item) => item);
            } else {
                _queryParams["event_data_id"] = eventDataId;
            }
        }

        if (bulkRetryId != null) {
            if (Array.isArray(bulkRetryId)) {
                _queryParams["bulk_retry_id"] = bulkRetryId.map((item) => item);
            } else {
                _queryParams["bulk_retry_id"] = bulkRetryId;
            }
        }

        if (include != null) {
            _queryParams["include"] = include;
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
                `requests/${encodeURIComponent(id)}/events`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0-beta.3",
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
            return await serializers.EventPaginatedResult.parseOrThrow(_response.body, {
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
     * @param {Hookdeck.RequestListIgnoredEventRequest} request
     * @param {Request.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.NotFoundError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.request.listIgnoredEvent("id")
     */
    public async listIgnoredEvent(
        id: string,
        request: Hookdeck.RequestListIgnoredEventRequest = {},
        requestOptions?: Request.RequestOptions
    ): Promise<Hookdeck.IgnoredEventPaginatedResult> {
        const { id: id_, orderBy, dir, limit, next, prev } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (id_ != null) {
            if (Array.isArray(id_)) {
                _queryParams["id"] = id_.map((item) => item);
            } else {
                _queryParams["id"] = id_;
            }
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
                `requests/${encodeURIComponent(id)}/ignored_events`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.3.0-beta.3",
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
            return await serializers.IgnoredEventPaginatedResult.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
