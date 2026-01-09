# learn-hono1

Hono v4 の練習。
[Getting Started - Hono](https://hono.dev/docs/getting-started/basic) のあたり。
pnpm 使用。

## とりあえず動かす

```sh
# 準備
pnpm i

# ホットリロードつきで起動
pnpm dev &
pnpm ex1
```

## テスト

```sh
pnpm test
```

## Playwright を使った e2e テスト

Playwright を使うほどのパッケージではないのだけど練習として。

```sh
# 準備
pnpm exec playwright install chromium  # とりあえず chrome だけで始めてみる
# テスト実行 & レポート
pnpm test:e2e
```

## ビルド

```sh
pnpm lint
pnpm build
## `./dist/index.mjs` にトランスパイルされる。
pnpm run preview
pnpm run smoke-test
#
pnpm pack
```

## TODO

- [x] バンドル - tsdown つかった
- [x] パッケージング - ちゃんと発行すれば `npx learn-hono1` でサーバが上がるはず
- [ ] パブリッシュ
