import Link from "next/link";
import { db } from "../server/db/index"


export const dynamic = "force-dynamic";

const mockUrls = [
	"https://utfs.io/f/2729a1af-e594-4439-8988-09cf9ada6d3d-9lfaf9.jpg",
	"https://utfs.io/f/28f7c026-a0d7-4869-9bd1-a4d374ed0524-d3fhlw.png",
];


export default async function HomePage() {

	const images = await db.query.image.findMany({
		orderBy: (model, { desc }) => desc(model.id),
	});

	console.log(images);

	return (
	<main className="flex min-h-screen flex-col items-center justify-center bg-slate-500 text-white">
		<div className="flex flex-auto	 gap-4">
			{images.map((image, index) => (
				<div key={image.id + "-"  + index} className="flex w-48 flex-col">
					<img src={image.url}></img>
					<p className=" text-pink-500">{image.name}</p>
				</div>
			))}
		</div>
	</main>
	);
}
