import { Context, Next } from 'koa';

export function timeout(timeout: number = 4000, cb?: Function) {
  let timer: NodeJS.Timeout;
  return async (ctx: Context, next: Next) => {
    await Promise.race([
      new Promise<void>(resolve => {
        timer = setTimeout(() => {
          cb && cb(ctx);
          resolve();
        }, timeout);
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
