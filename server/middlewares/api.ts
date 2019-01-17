import axios from 'axios';
import { Middleware } from 'koa';

export const api = (): Middleware => function apiMiddleware(ctx, next) {
    const apiClient = axios.create({
        baseURL: ctx.backendURL.href,
        maxRedirects: 0
    });

    ctx.apiClient = apiClient;

    return next();
};
