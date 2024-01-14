import { defineTokens } from "@pandacss/dev";

export const radii = defineTokens.radii({
	none: { value: "0" },
	xs: { value: "0.125rem" },
	sm: { value: "0.25rem" },
	md: { value: "0.375rem" },
	lg: { value: "0.5rem" },
	xl: { value: "0.75rem" },
	full: { value: "9999px" },

	form: {
		sm: { value: "0.375rem" },
		md: { value: "0.375rem" },
		lg: { value: "0.5rem" },
	},

	outerForm: {
		sm: { value: "0.625rem" },
		md: { value: "0.625rem" },
		lg: { value: "0.75rem" },
	},
});
