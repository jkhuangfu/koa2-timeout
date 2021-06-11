import { Next } from 'koa';

export async function timeout(timeout: number = 4000, timeOutCb?: Function) {
  let timer: NodeJS.Timeout;
  return async (next: Next) =>
    await Promise.race([
      new Promise<void>(resolve => {
        timer = setTimeout(() => {
          timeOutCb && timeOutCb();
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
}
