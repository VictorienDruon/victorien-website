import { cva } from "@styled-system/css";

export const button = cva({
	base: {
		alignItems: "center",
		appearance: "none",
		cursor: "pointer",
		display: "inline-flex",
		minWidth: "0",
		justifyContent: "center",
		outline: "none",
		borderWidth: 1,
		fontFamily: "body",
		fontWeight: "bold",
		transitionDuration: "normal",
		transitionProperty: "background, border-color, color, box-shadow",
		transitionTimingFunction: "default",
		verticalAlign: "middle",
		whiteSpace: "nowrap",
	},
	defaultVariants: {
		variant: "secondary",
		size: "md",
	},
	variants: {
		variant: {
			primary: {
				borderColor: "accent.9",
				background: "accent.9",
				color: "white",
				_hover: {
					background: "accent.10",
				},
				_active: {
					background: "accent.11",
				},
			},
			secondary: {
				borderColor: "border.default",
				background: "neutral.3",
				color: "fg.default",
				_hover: {
					background: "neutral.4",
				},
				_active: {
					background: "neutral.5",
				},
			},
			ghost: {
				borderColor: "transparent",
				background: "transparent",
				color: "fg.default",
				_hover: {
					background: "neutral.3",
				},
				_active: {
					background: "neutral.3",
				},
			},
		},
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
				textStyle: "md",
				px: "6",
				gap: "2",
			},
		},
	},
});
