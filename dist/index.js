"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
function timeout(time, cb) {
    let timer;
    return async (ctx, next) => {
        await Promise.race([
            new Promise(resolve => {
                timer = setTimeout(() => {
                    if (cb) {
                        cb(ctx, next);
                    }
                    else {
                        throw new Error('request timeout');
                    }
                    resolve();
                }, time || 4000);
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
