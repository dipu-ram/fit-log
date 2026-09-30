
export default function Loading() {
  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="animate-pulse">
          <div className="h-10 w-64 rounded bg-zinc-800" />

          <div className="mt-4 h-5 w-96 max-w-full rounded bg-zinc-900" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
              >
                <div className="h-56 bg-zinc-900" />

                <div className="space-y-3 p-5">
                  <div className="h-6 w-3/4 rounded bg-zinc-800" />
                  <div className="h-4 w-full rounded bg-zinc-900" />
                  <div className="h-4 w-2/3 rounded bg-zinc-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}