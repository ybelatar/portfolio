"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
	const router = useRouter();

	  return (
	  <nav className="flex w-full items-center justify-between p-4
	  text-x1 font-semibold">
		  <div className="flex items-center">
			<a href="/">
				<button >
					<img src="/favicon.ico"/>
				</button>
			</a>
		  </div>
		  <div className="flex space-x-16 font-montserrat">
			<a href="/projects">Projects</a>
			<a href="/cv">CV</a>
			<a href="/marketplace">Marketplace</a>
		  </div>
		  <div className="flex flex-row">
			<SignedOut>
				<SignInButton></SignInButton>
			</SignedOut>
			<SignedIn>
				{/* <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
					router.refresh();
				}}/> */}
				<UserButton></UserButton>
			</SignedIn>
		  </div>
	  </nav>
  );
}
