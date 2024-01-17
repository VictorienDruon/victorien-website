import { sva } from "@styled-system/css";

export const section = sva({
	slots: ["container", "section", "title", "subtitle"],
	base: {
		container: {
			p: "24",
		},
		section: {
			display: "flex",
			flexDir: "column",
			justifyContent: "center",
			alignItems: "center",
			maxW: "5xl",
			mx: "auto",
			gap: "6",
		},
		title: {
			color: "fg.default",
			textStyle: "3xl",
		},
		subtitle: {
			color: "fg.muted",
			textStyle: "xl",
			textAlign: "center",
			mb: "12",
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
