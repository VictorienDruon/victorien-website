import { sva } from "@styled-system/css";

export const section = sva({
	slots: ["container", "section", "title", "subtitle"],
	base: {
		container: {
			px: { base: "8", sm: "16", md: "24" },
			py: { base: "16", sm: "20", md: "24" },
		},
		section: {
			display: "flex",
			flexDir: "column",
			justifyContent: "center",
			alignItems: "center",
			maxW: "4xl",
			mx: "auto",
			gap: ["4", "6", "8"],
		},
		title: {
			color: "fg.default",
			textStyle: ["xl", "2xl", "3xl"],
			textAlign: "center",
		},
		subtitle: {
			color: "fg.muted",
			textStyle: ["md", "lg", "xl"],
			textAlign: "center",
			mb: ["4", "6", "8"],
		},
	},
	defaultVariants: {
		variant: "primary",
	},
	variants: {
		variant: {
			primary: {
				container: {
					bg: "bg.default",
				},
			},
			secondary: {
				container: {
					bg: "bg.subtle",
				},
			},
		},
	},
});
