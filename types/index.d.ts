import type { Context, Next, Middleware } from 'koa';
/**
 * @description koa2 response timeout middleware
 * @param {number} timeout (deffault value 4000s) the max time to response
 * @param {function} cb the function to handle timeout
 */
export function timeout(timeout?: number, cb?: (ctx: Context, next: Next) => void): Middleware;
