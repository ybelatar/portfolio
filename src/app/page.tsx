import Link from "next/link";
import { db } from "../server/db/index"
import { SignedIn, SignedOut } from "@clerk/nextjs";


export const dynamic = "force-dynamic";

async function Images() {

	const images = await db.query.image.findMany({
		orderBy: (model, { desc }) => desc(model.id),
	});

	return (
		<div className="flex flex-wrap justify-center gap-4">
			{images.map((image) => (
				<div key={image.id} className="flex w-48 flex-col">
					<img src={image.url}></img>
					<p className=" text-pink-500">{image.name}</p>
				</div>
			))}
		</div>
	);
}



export default async function HomePage() {

	


	return (
	<main className="flex min-h-screen flex-col items-center justify-center bg-slate-500 text-white">
		<SignedOut>
			<div className="w-full h-full text-2xl">Please sign in</div>
		</SignedOut>
		<SignedIn>
			<Images/>
		</SignedIn>
	</main>
	);
}
