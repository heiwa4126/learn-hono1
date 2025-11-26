# learn-hono1

Hono の練習。pnpm 使用。

[Getting Started - Hono](https://hono.dev/docs/getting-started/basic) のあたり。

## とりあえず動かす

```sh
# 準備
pnpm i

# ホットリロードつきで起動
pnpm dev &
pnpm ex1
```

## Playwright を使った e2e テスト

```sh
# 準備
pnpm exec playwright install chromium  # とりあえず chrome だけあればOK
# テスト実行
pnpm test:e2e:test
```

## ビルド

```sh
pnpm build
```

`./dist` の下にトランスパイルされる。
詳しくは [Node.js - Hono の Dockerfile のところ](https://hono.dev/docs/getting-started/nodejs#dockerfile) 参照。

TODO: パッケージング & バンドル
