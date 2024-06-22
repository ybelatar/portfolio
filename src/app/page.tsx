import Link from "next/link";

const mockUrls = [
	"https://utfs.io/f/2729a1af-e594-4439-8988-09cf9ada6d3d-9lfaf9.jpg",
	"https://utfs.io/f/28f7c026-a0d7-4869-9bd1-a4d374ed0524-d3fhlw.png",
];

const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-500 text-white">
    	<div className="flex flex-auto	 gap-4">
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
