import { ModeToggle } from "@/components/select-module";
import HomeSections from "@/components/shared/Home";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-7xl mx-auto">
      <p>Implemeted the authentication with better auth</p>
      <HomeSections />
      <div className="flex gap-4">
        <Link href={"/login"} className="py-2 border border-gray-600 rounded-sm px-4 shadow" >Login </Link>
        <Link href={"/signup"} className="py-2 border border-gray-600 rounded-sm px-4 shadow" >Sign up </Link>
        <ModeToggle />
      </div>
    </main>
  );
}
