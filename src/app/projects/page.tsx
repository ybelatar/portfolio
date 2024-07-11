import Link from "next/link";
import { db } from "../../server/db/index";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Hero } from "../_components/hero";
import { BentoGrid, BentoGridItem } from "../_components/bento-grid";
import { IconClipboardCopy } from "@tabler/icons-react";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <BentoGrid className="max-w-4x1 mx-auto p-4 pt-6 font-montserrat md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </main>
  );
}
const Skeleton = () => (
  <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full   flex-1 rounded-xl border  border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black"></div>
);

const items = [
  {
    title: "Libft",
    href: "https://github.com/ybelatar/libft",
    description: "Functions from the standard C library",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ft_printf",
    href: "https://github.com/ybelatar/printf",
    description: "Famous printf function with a few options implemented",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Get_next_line",
    href: "https://github.com/ybelatar/get_next_line",
    description: "Safe and efficient way to fetch all data from a file",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Push_swap",
    href: "https://github.com/ybelatar/push_swap",
    description: "Optimized sort using 2 stacks",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Minitalk",
    href: "https://github.com/ybelatar/minitalk",
    description: "Data exchange program using UNIX signals",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "So_long",
    href: "https://github.com/ybelatar/so_long",
    description: "2D game built with X server",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Philosophers",
    href: "https://github.com/ybelatar/philosophers",
    description:
      "Solution to the Dining Philosophers problem using multithreading programming",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Minishell",
    href: "https://github.com/ybelatar/minishell",
    description: "Shell built from scratch (lexer, parser and execution)",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cub3D",
    href: "https://github.com/ybelatar/cub3D",
    description: "Fully functionnal raycaster built using dda",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Inception",
    href: "https://github.com/ybelatar/Inception",
    description: "Wordpress website ran on Docker containers",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ft_irc",
    href: "https://github.com/ybelatar/IRC",
    description: "IRC server using sockets to accomodate for the irssi client",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ft_transcendence",
    href: "https://github.com/aword-corp/ft_transcendence",
    description:
      "Website aimed at playing pong online (local, AI, ranked, tournaments, ...)",
    header: <Skeleton />,
    className: "md:col-span-3",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
