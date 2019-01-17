import { UrlObject } from 'url';
import * as Koa from 'koa';
import { AxiosInstance } from 'axios';
import { IAssetsBundles } from './interfaces/IAssetsBundles';

declare module 'koa' {
    interface Context {
        apiClient: AxiosInstance;
        backendURL: UrlObject;
        // timings: {url: string; start: number, end?: number}[];
        assets: IAssetsBundles;
    }
}
