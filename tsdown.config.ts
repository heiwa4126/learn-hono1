import { defineConfig } from "tsdown";

export default defineConfig([
	{
		// 常識的バージョン
		clean: true,
		entry: ["src/index.ts"],
		format: ["esm"],
		outDir: "dist",
		sourcemap: false,
		dts: false,
		unbundle: false,
		minify: true,
	},
	{
		// // テスト: dist/index.mjs に全バンドル版を出力
		// // まあさすがにやりすぎかも
		// clean: true,
		// entry: ["src/index.ts"],
		// format: ["esm"],
		// outDir: "dist",
		// sourcemap: false,
		// dts: false,
		// unbundle: false,
		// minify: true,
		// noExternal: ["**/*"], // Bundle all dependencies
	},
]);
