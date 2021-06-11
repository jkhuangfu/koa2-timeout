"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
function timeout(timeout = 4000, timeOutCb) {
    return __awaiter(this, void 0, void 0, function* () {
        let timer;
        return (next) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.race([
                new Promise(resolve => {
                    timer = setTimeout(() => {
                        timeOutCb && timeOutCb();
                        resolve();
                    }, timeout);
                }),
                new Promise(resolve => {
                    (() => __awaiter(this, void 0, void 0, function* () {
                        yield next();
                        clearTimeout(timer);
                        resolve();
                    }))();
                })
            ]);
        });
    });
}
exports.timeout = timeout;
