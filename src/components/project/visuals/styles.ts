import { css } from "@styled-system/css";
import { center, grid } from "@styled-system/patterns";

export const container = grid({
	gridTemplateColumns: [1, 2, 3],
	gap: ["2", "3", "4"],
});

export const visualContainer = center({});

export const visual = css({
	w: "full",
	maxW: { smDown: "64" },
	aspectRatio: "wide",
	objectFit: "cover",
});
