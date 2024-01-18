import { hstack, stack } from "@styled-system/patterns";

export const container = stack({
	p: "8",
	gap: "4",
});

export const linkGroups = hstack({
	justifyContent: "space-between",
});

export const linkGroup = hstack({
	gap: "4",
});
