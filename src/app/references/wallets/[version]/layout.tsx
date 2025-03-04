import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchWalletsDoc } from "@/app/references/components/TDoc/fetchDocs/fetchWalletsDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchWalletsDoc,
	packageSlug: "wallets",
	sdkTitle: "Wallet SDK",
});

export const metadata = createMetadata({
	title: "References | thirdweb Wallet SDK ",
	description: "Full Reference for thirdweb Wallet SDK.",
});
