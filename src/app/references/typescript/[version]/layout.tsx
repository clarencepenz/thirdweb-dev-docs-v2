import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchTypeScriptDoc } from "@/app/references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchTypeScriptDoc,
	packageSlug: "typescript",
	sdkTitle: "TypeScript SDK",
});

export const metadata = createMetadata({
	title: "References | thirdweb TypeScript SDK ",
	description: "Full Reference for thirdweb TypeScript SDK.",
});
