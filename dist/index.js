"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
function timeout(timeout = 4000, cb) {
    let timer;
    return async (ctx, next) => {
        await Promise.race([
            new Promise(resolve => {
                timer = setTimeout(() => {
                    if (cb) {
                        cb(ctx);
                    }
                    else {
                        throw new Error('request timeout');
                    }
                    resolve();
                }, timeout);
            }),
            new Promise(resolve => {
                (async () => {
                    await next();
                    clearTimeout(timer);
                    resolve();
                })();
            })
        ]);
    };
}
exports.timeout = timeout;
