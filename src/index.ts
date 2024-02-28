import type { Context, Next } from 'koa';

export function timeout(time?: number, cb?: (ctx: Context, next: Next) => void) {
  let timer: NodeJS.Timeout;
  return async (ctx: Context, next: Next) => {
    await Promise.race([
      new Promise<void>(resolve => {
        timer = setTimeout(() => {
          if (cb) {
            cb(ctx, next);
          } else {
            throw new Error('request timeout');
          }
          resolve();
        }, time || 4000);
      }),
      new Promise<void>(resolve => {
        (async () => {
          await next();
          clearTimeout(timer);
          resolve();
        })();
      })
    ]);
  };
}
