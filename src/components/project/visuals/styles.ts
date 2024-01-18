import { css } from "@styled-system/css";
import { grid } from "@styled-system/patterns";

export const container = grid({
	gridTemplateColumns: 3,
});

export const visual = css({
	w: "full",
	aspectRatio: "wide",
	objectFit: "cover",
});
