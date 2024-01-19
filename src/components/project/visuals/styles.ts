import { css } from "@styled-system/css";
import { center, grid } from "@styled-system/patterns";

export const container = center();

export const visuals = grid({
	gridTemplateColumns: [1, 2, 2, 3],
	justifyContent: "center",
	gap: ["4", "6", "8"],
});

export const visual = css({
	w: ["56", "60", "64"],
	h: "full",
	aspectRatio: "wide",
	objectFit: "cover",
});
