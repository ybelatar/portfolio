import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";

import { TopNav } from "./_components/topnav";


export const metadata = {
  title: "Ybelatar",
  description: "Younes Belataris' portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
	<ClerkProvider>
		<html lang="en">
		<body>
			<TopNav/>
			{children}
		</body>
		</html>
	</ClerkProvider>
  );
}
