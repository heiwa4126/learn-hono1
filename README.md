# learn-hono1

Hono の練習。pnpm 使用。

[Getting Started - Hono](https://hono.dev/docs/getting-started/basic) のあたり。

## とりあえず動かす

```sh
pnpm dev &
curl http://localhost:3000
```

## Playwright を使った e2e テスト

```sh
pnpm test:e2e
```

## ビルド

```sh
pnpm build
```

`./dist` の下にトランスパイルされる。
詳しくは [Node.js - Hono の Dockerfile のところ](https://hono.dev/docs/getting-started/nodejs#dockerfile) 参照。

TODO: パッケージング & バンドル
