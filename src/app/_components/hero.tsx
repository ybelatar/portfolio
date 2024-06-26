import { FlipWords } from "./flip-words";


export function FlipWordsHero() {
  const words = ["Innovative", "Secure", "Robust", "Scalable", "Powerful"];
 
  return (
    <div className="flex items-center">
      <div className="text-5xl mx-auto font-montserrat font-bold text-center text-#76697E dark:text-blue-950">
        Younes - Your Partner <br /> In Building
        <FlipWords words={words} />
        Web3 Solutions
      </div>
    </div>
  );
}

export function Hero() {
	return (
			<div
			 className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>

					<div className="flex flex-col items-center space-y-10">
						{/* Hero Title */}
						{/* <h1 className="mb-4 text-4xl font-bold md:text-6xl">
							Younes - Your partner in Web3 innovation
						</h1> */}
						<FlipWordsHero/>
						<p className="mb-6 max-w-lg font-montserrat text-center text-gray-700 md:mb-10 lg:mb-12">
							Passionate about Web3 and the future of the internet, I use my skills for the creation of innovative Web3 solutions.
						</p>
						{/* Hero Button */}
						<div className="flex items-center">
							<button type="button" className="text-white bg-pink-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-pink-700 dark:hover:bg-pink-800 dark:focus:ring-blue-800">Contact Me</button>
							<button type="button" className="text-white bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-950 dark:focus:ring-blue-800">Projects</button>
						</div>
						<img
						src="/hardersponge.png"
						alt="spongebob thug"
						className="inline-block h-full w-full max-w-[640px"
						/>
					</div>
					{/* Hero Image */}
				</div>
	);
}