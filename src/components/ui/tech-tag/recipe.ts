import { cva } from "@styled-system/css";

export const techTag = cva({
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "body",
		fontWeight: "bold",
		bgGradient: {
			base: "to-bl",
			_dark: "to-tr",
		},
		gradientFrom: "neutral.1",
		gradientTo: "neutral.4",
		boxShadow: "sm",
	},
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			sm: {
				h: "8",
				minW: "8",
				textStyle: "sm",
				px: "2",
				gap: "1",
			},
			md: {
				h: "10",
				minW: "10",
				textStyle: "md",
				px: "4",
				gap: "2",
			},
			lg: {
				h: "12",
				minW: "12",
				textStyle: "lg",
				px: "6",
				gap: "2",
			},
		},
	},
});
