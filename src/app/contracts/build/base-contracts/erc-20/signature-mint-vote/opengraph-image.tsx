import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "ERC20SignatureMintVote contract",
		icon: "contract",
	});
}
