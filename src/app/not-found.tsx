import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 text-center text-white">
      <div className="max-w-lg">
        <p className="text-7xl font-black text-lime-400">
          404
        </p>

        <h1 className="mt-5 text-3xl font-bold">
          Workout Not Found
        </h1>

        <p className="mt-3 text-zinc-400">
          Sorry, the page or workout you are looking for
          could not be found.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}