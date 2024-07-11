import Link from "next/link";
import { db } from "../../server/db/index";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Hero } from "../_components/hero";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white"></main>
  );
}
