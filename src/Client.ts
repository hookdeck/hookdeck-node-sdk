/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { IssueTrigger } from "./api/resources/issueTrigger/client/Client";
import { Attempt } from "./api/resources/attempt/client/Client";
import { Bookmark } from "./api/resources/bookmark/client/Client";
import { Destination } from "./api/resources/destination/client/Client";
import { EventBulkRetry } from "./api/resources/eventBulkRetry/client/Client";
import { Event } from "./api/resources/event/client/Client";
import { IgnoredEventBulkRetry } from "./api/resources/ignoredEventBulkRetry/client/Client";
import { Issue } from "./api/resources/issue/client/Client";
import { Request } from "./api/resources/request/client/Client";
import { RequestBulkRetry } from "./api/resources/requestBulkRetry/client/Client";
import { Source } from "./api/resources/source/client/Client";
import { Notification } from "./api/resources/notification/client/Client";
import { CustomDomain } from "./api/resources/customDomain/client/Client";
import { Transformation } from "./api/resources/transformation/client/Client";
import { Connection } from "./api/resources/connection/client/Client";

export declare namespace IntercomClient {
    interface Options {
        environment?: core.Supplier<environments.IntercomEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class IntercomClient {
    constructor(protected readonly _options: IntercomClient.Options) {}

    protected _issueTrigger: IssueTrigger | undefined;

    public get issueTrigger(): IssueTrigger {
        return (this._issueTrigger ??= new IssueTrigger(this._options));
    }

    protected _attempt: Attempt | undefined;

    public get attempt(): Attempt {
        return (this._attempt ??= new Attempt(this._options));
    }

    protected _bookmark: Bookmark | undefined;

    public get bookmark(): Bookmark {
        return (this._bookmark ??= new Bookmark(this._options));
    }

    protected _destination: Destination | undefined;

    public get destination(): Destination {
        return (this._destination ??= new Destination(this._options));
    }

    protected _eventBulkRetry: EventBulkRetry | undefined;

    public get eventBulkRetry(): EventBulkRetry {
        return (this._eventBulkRetry ??= new EventBulkRetry(this._options));
    }

    protected _event: Event | undefined;

    public get event(): Event {
        return (this._event ??= new Event(this._options));
    }

    protected _ignoredEventBulkRetry: IgnoredEventBulkRetry | undefined;

    public get ignoredEventBulkRetry(): IgnoredEventBulkRetry {
        return (this._ignoredEventBulkRetry ??= new IgnoredEventBulkRetry(this._options));
    }

    protected _issue: Issue | undefined;

    public get issue(): Issue {
        return (this._issue ??= new Issue(this._options));
    }

    protected _request: Request | undefined;

    public get request(): Request {
        return (this._request ??= new Request(this._options));
    }

    protected _requestBulkRetry: RequestBulkRetry | undefined;

    public get requestBulkRetry(): RequestBulkRetry {
        return (this._requestBulkRetry ??= new RequestBulkRetry(this._options));
    }

    protected _source: Source | undefined;

    public get source(): Source {
        return (this._source ??= new Source(this._options));
    }

    protected _notification: Notification | undefined;

    public get notification(): Notification {
        return (this._notification ??= new Notification(this._options));
    }

    protected _customDomain: CustomDomain | undefined;

    public get customDomain(): CustomDomain {
        return (this._customDomain ??= new CustomDomain(this._options));
    }

    protected _transformation: Transformation | undefined;

    public get transformation(): Transformation {
        return (this._transformation ??= new Transformation(this._options));
    }

    protected _connection: Connection | undefined;

    public get connection(): Connection {
        return (this._connection ??= new Connection(this._options));
    }
}
