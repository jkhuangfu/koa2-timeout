# @koa/timeout

Timeout middleware for koa.

## Installation

```shell
$ npm install @koa/timeout
```

## Hello @koa/timeout

### use javaScript

```js
const Koa = require('koa');
const { timeout } = require('koa2-timeout');
const app = new Koa();
const timeOutHandler = ctx => {
  ctx.body = { code: 408, message: 'request timeout' };
};
app.use(timeout(2000, timeOutHandler));
app.use(async ctx => {
  await new Promise(res => {
    setTimeout(() => {
      res();
    }, 4000);
  });
  ctx.body = 'your response';
});
app.listen(3000, () => {
  console.log('http server is listening at port 3000');
});
```

### use typeScript

```js
import Koa from 'koa';
import { timeout } from 'koa2-timeout';
const timeOutHandler = (ctx: Koa.Context) => {
  ctx.body = { code: 408, message: 'request timeout' };
};
const app = new Koa();
app.use(timeout(2000, timeOutHandler));
app.use(async (ctx: Koa.Context) => {
  await new Promise<void>(res => {
    setTimeout(() => {
      res();
    }, 4000);
  });
  ctx.body = 'your response';
});
app.listen(3000, () => {
  console.log('http server is listening at port 3000');
});

```
