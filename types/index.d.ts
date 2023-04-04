import type { Context, Next } from 'koa';
/**
 * @description koa2 response timeout middleware
 * @param {number} timeout (deffault value 4000s) the max time to response
 * @param {function} timeOutCb the function to handle timeout
 */
export function timeout(timeout: number, timeOutCb?: (ctx: Context, next: Next) => void): Promise<(next: Next) => Promise<void>>;
