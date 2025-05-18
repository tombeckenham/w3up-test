import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		remotePatterns: [
			new URL("https://*.ipfs.w3s.link/*"),
			new URL("https://picsum.photos/seed/**"),
		],
	},
};

export default nextConfig;
