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
				h: { base: "6", sm: "7", md: "8" },
				minW: { base: "6", sm: "7", md: "8" },
				textStyle: ["xs", "sm"],
				px: "2",
				gap: "1",
			},
			md: {
				h: { base: "8", sm: "9", md: "10" },
				minW: { base: "8", sm: "9", md: "10" },
				textStyle: ["sm", "md"],
				px: { base: "2", sm: "3", md: "4" },
				gap: "1",
			},
			lg: {
				h: { base: "10", sm: "11", md: "12" },
				minW: { base: "10", sm: "11", md: "12" },
				textStyle: ["md", "lg"],
				px: { base: "4", sm: "5", md: "6" },
				gap: "2",
			},
		},
	},
});
