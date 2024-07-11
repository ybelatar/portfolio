import Image from "next/image";
import { FlipWords } from "./flip-words";

export function FlipWordsHero() {
  const words = ["Innovative", "Secure", "Robust", "Scalable", "Powerful"];

  return (
    <div className="flex items-center">
      <div className="text-#76697E mx-auto text-center font-montserrat text-5xl font-bold dark:text-blue-950">
        Younes - Software Engineer Prospect
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-10">
        {/* Hero Title */}
        {/* <h1 className="mb-4 text-4xl font-bold md:text-6xl">
							Younes - Your partner in Web3 innovation
						</h1> */}
        <FlipWordsHero />
        <p className="mb-6 max-w-lg text-center font-montserrat text-gray-700 md:mb-10 lg:mb-12">
          Passionate about Web3 and the future of the internet, I use my skills
          for the creation of innovative Web3 solutions.
        </p>
        {/* Hero Button */}
        <div className="flex items-center">
          <button
            type="button"
            className="mb-2 me-2 rounded-full bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-pink-700 dark:hover:bg-pink-800 dark:focus:ring-blue-800"
          >
            Contact Me
          </button>
          <a href="/projects">
            <button
              type="button"
              className="mb-2 me-2 rounded-full bg-blue-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-950 dark:focus:ring-blue-800"
            >
              Projects
            </button>
          </a>
        </div>
        <Image
          src="/hardersponge.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          alt="spongebob thug"
        />
      </div>
      {/* Hero Image */}
    </div>
  );
}
