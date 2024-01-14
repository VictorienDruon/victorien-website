import { defineConfig } from "@pandacss/dev";
import { theme } from "@/styles/theme";

export default defineConfig({
	preflight: true,
	presets: [theme],
	include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
	exclude: [],
	outdir: "styled-system",
});
