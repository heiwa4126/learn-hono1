/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		exclude: ["tests-e2e/**/*.spec.ts", "**/node_modules/**"],
	},
});
