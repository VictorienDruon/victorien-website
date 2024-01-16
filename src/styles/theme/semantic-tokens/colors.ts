import { defineSemanticTokens } from "@pandacss/dev";

const createColorPalette = (name: string) =>
	Array.from({ length: 12 }, (_, i) => i + 1).reduce(
		(acc, scale) => ({
			...acc,
			[scale]: {
				value: {
					base: `{colors.${name}.light.${scale}}`,
					_dark: `{colors.${name}.dark.${scale}}`,
				},
			},
		}),
		{}
	);

export const colors = defineSemanticTokens.colors({
	accent: createColorPalette("orange"),
	neutral: createColorPalette("sand"),

	bg: {
		default: { value: "{colors.neutral.1}" },
		subtle: { value: "{colors.neutral.2}" },
		muted: { value: "{colors.neutral.3}" },
	},

	fg: {
		default: { value: "{colors.neutral.12}" },
		muted: { value: "{colors.neutral.11}" },
		subtle: { value: "{colors.neutral.10}" },
	},

	border: {
		default: { value: "{colors.neutral.6}" },
		accent: { value: "{colors.accent.10}" },
	},

	focusRing: {
		default: { value: "{colors.accent.7}" },
	},
});
