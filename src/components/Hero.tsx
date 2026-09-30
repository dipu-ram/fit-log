import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-zinc-900 bg-black text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">

        <div>
          <span className="inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold tracking-widest text-lime-400">
            WORKOUT LIBRARY
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            TRAIN WITH INTENT.
            <br />
            <span className="text-lime-400">
              LOG EVERY SET.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Build better workouts, track your progress,
            and stay consistent with a focused workout
            library built for serious training.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex rounded-lg bg-lime-400 px-6 py-3 text-sm font-black text-black transition hover:bg-lime-300"
          >
            Explore Workouts
          </a>
        </div>

        
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <div className="flex aspect-video items-center justify-center p-4 sm:p-8">
            <Image
              src="/assets/banner.png"
              alt="FitLog Workout Banner"
              width={700}
              height={500}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}