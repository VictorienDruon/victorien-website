import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
	"2xs": {
		value: { fontSize: "2xs", lineHeight: "0.875rem" },
	},
	xs: {
		value: { fontSize: "xs", lineHeight: "1.125rem" },
	},
	sm: {
		value: { fontSize: "sm", lineHeight: "1.25rem" },
	},
	md: {
		value: { fontSize: "md", lineHeight: "1.5rem" },
	},
	lg: {
		value: { fontSize: "lg", lineHeight: "1.75rem" },
	},
	xl: {
		value: { fontSize: "xl", lineHeight: "1.875rem" },
	},
	"2xl": {
		value: { fontSize: "2xl", lineHeight: "2rem" },
	},
	"3xl": {
		value: { fontSize: "3xl", lineHeight: "2.375rem" },
	},
	"4xl": {
		value: { fontSize: "4xl", lineHeight: "2.75rem", letterSpacing: "-0.02em" },
	},
});
