import Link from "next/link";

function GameItem({
  name,
  href,
  children,
}: {
  name: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-center text-xl text-slate-900"
    >
      <div className="aspect-square rounded-lg bg-slate-200 hover:bg-slate-300">
        {children}
      </div>
      <span className="min-w-fit group-hover:underline">{name}</span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[32px] p-24">
      <h1 className="text-3xl text-slate-800">Games</h1>
      <div className="grid flex-1 grid-cols-2 items-center justify-center gap-[32px]">
        <GameItem href="/snake" name="Snake Game">
          image here
        </GameItem>
      </div>
    </main>
  );
}
