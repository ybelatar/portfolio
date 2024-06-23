"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
	const router = useRouter();

	  return (
	  <nav className="flex w-full items-center justify-between border-b p-4
	  text-x1 font-semibold">
		  <div>
			<a href="/">Home</a>
		  </div>
		  <div className="flex flex-row">
			<SignedOut>
				<SignInButton></SignInButton>
			</SignedOut>
			<SignedIn>
				<UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
					router.refresh();
				}}/>
				<UserButton></UserButton>
			</SignedIn>
		  </div>
	  </nav>
  );
}
