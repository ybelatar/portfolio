import Link from "next/link";
import { db } from "../server/db/index"

const mockUrls = [
	"https://utfs.io/f/2729a1af-e594-4439-8988-09cf9ada6d3d-9lfaf9.jpg",
	"https://utfs.io/f/28f7c026-a0d7-4869-9bd1-a4d374ed0524-d3fhlw.png",
];

const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url,
}));

export default async function HomePage() {

	const posts = await db.query.posts.findMany();

	console.log(posts);

	return (
	<main className="flex min-h-screen flex-col items-center justify-center bg-slate-500 text-white">
		<div className="flex flex-auto	 gap-4">
			{posts.map((post) => (
				<div key={post.id}>{post.name}</div>
			))}
			{mockImages.map((image) => (
				<div key={image.id} className="w-48">
					<img src={image.url}/>
					<p className="boldred">TEST</p>
				</div>
			))}
		</div>
	</main>
	);
}
