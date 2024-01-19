import { grid } from "@styled-system/patterns";

export const experiences = grid({
	gridTemplateColumns: [1, 2, 2, 3],
	justifyContent: "center",
	gap: ["4", "6", "8"],
});
