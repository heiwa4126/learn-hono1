import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	testMatch: ["<rootDir>/**/*.test.[jt]s?(x)"],
};

export default config;
