# Copilot Instructions for AI Agents

## プロジェクト概要
- このリポジトリは [Hono v4](https://hono.dev/) の練習用です。主に Web サーバー/アプリケーションの構築・テスト・パッケージングを学ぶ目的です。
- `pnpm` を使用しています。依存管理・スクリプト実行はすべて pnpm コマンドで行います。
- GitHubのレポジトリは **heiwa4126/learn-hono1** です。

## 主要ディレクトリ・ファイル
- `src/` : アプリケーション本体。`app.tsx`（エントリーポイント）、`index.ts`（ルーティング/起動）、`app.test.ts`（ユニットテスト）
- `tests-e2e/` : Playwright による E2E テスト。`hono1.spec.ts` 参照。
- `playwright.config.ts` : Playwright 設定。
- `vitest.config.ts` : Vitest 設定。
- `tsdown.config.ts` : バンドル/トランスパイル設定。
- `README.md` : 開発・テスト・ビルド手順の詳細。

## 開発・ビルド・テストワークフロー
- 依存インストール: `pnpm i`
- 開発サーバ起動: `pnpm dev`（ホットリロード）
- ビルド: `pnpm build` → `./dist/index.mjs` が生成
- Lint: `pnpm lint`
- ユニットテスト: `pnpm test`（Vitest）
- E2Eテスト: `pnpm exec playwright install chromium` → `pnpm test:e2e`
- スモークテスト: `pnpm run smoke-test`（devサーバ or previewサーバ起動後）
- パッケージング: `pnpm pack`

## プロジェクト固有のパターン・注意点
- Hono のルーティングは `src/index.ts` で定義。
- サーバのエントリーポイントは `src/app.tsx`。
- テストは `src/app.test.ts`（ユニット）と `tests-e2e/hono1.spec.ts`（E2E）で分離。
- Playwright は Chrome のみインストールして利用。
- バンドルは `tsdown` を利用（`tsdown.config.ts` 参照）。
- `pnpm preview` でビルド済みサーバの起動。
- `pnpm smoke-test` で動作確認。
- コミットメッセージは英語で。

## 例: よく使うコマンド
```sh
pnpm i
pnpm dev
pnpm build
pnpm lint
pnpm test
pnpm exec playwright install chromium
pnpm test:e2e
pnpm preview
pnpm smoke-test
pnpm pack
```

## 参考
- 詳細は [README.md](../README.md) を参照。
- Hono公式: https://hono.dev/docs/getting-started/basic

---
このファイルはAIエージェント向けのガイドです。不明点や追加すべき情報があればフィードバックしてください。
