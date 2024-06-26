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
		<head>
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
		</head>
		<body >
			<TopNav/>
			{children}
		</body>
		</html>
	</ClerkProvider>
  );
}
