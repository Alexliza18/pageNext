import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Alex , welcome to my page</span>
      <Link href={"/about"}>About Page directives</Link>
    </main>
  );
}
