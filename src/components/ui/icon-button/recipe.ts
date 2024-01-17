import { cva } from "@styled-system/css";

export const iconButton = cva({
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			sm: {
				px: "0",
			},
			md: {
				px: "0",
			},
			lg: {
				px: "0",
			},
		},
	},
});
