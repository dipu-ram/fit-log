"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { usePlan } from "@/context/PlanContext";
import { PlanWorkout } from "@/types";

type SortOption =
  | "default"
  | "duration"
  | "calories"
  | "rating";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    metrics,
    removeFromPlan,
    markAsDone,
    addToPlan,
    removeFromSaved,
  } = usePlan();

  const [sortBy, setSortBy] =
    useState<SortOption>("default");

  
  const sortedPlan = useMemo(() => {
    const items = [...plan];

    if (sortBy === "duration") {
      return items.sort(
        (a, b) =>
          a.duration - b.duration
      );
    }

    if (sortBy === "calories") {
      return items.sort(
        (a, b) =>
          a.caloriesBurned -
          b.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      return items.sort(
        (a, b) =>
          b.rating - a.rating
      );
    }

    return items;
  }, [plan, sortBy]);

  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">


        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-zinc-400 transition hover:text-lime-400"
        >
          ← Back to Library
        </Link>

        
        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
            Today&apos;s Training
          </p>

          <h1 className="mt-2 text-4xl font-black sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 text-zinc-400">
            Cap of five lifts for today.
            Finish them, then load more.
          </p>
        </div>


        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          {/* Exercises */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black">
              {metrics.exercises}
            </p>
          </div>

          {/* Minutes */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black">
              {metrics.minutes}
            </p>
          </div>

         
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black">
              {metrics.calories}
            </p>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-5 border-b border-zinc-800 pb-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Counts */}
          <div className="flex items-center gap-8">

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600">
                Today&apos;s Plan
              </p>

              <p className="mt-1 text-lg font-bold">
                {plan.length}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600">
                Saved
              </p>

              <p className="mt-1 text-lg font-bold">
                {saved.length}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <label
              htmlFor="sort"
              className="text-sm font-semibold text-zinc-400"
            >
              Sort by
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as SortOption
                )
              }
              className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-white outline-none focus:border-lime-400"
            >
              <option value="default">
                Default
              </option>

              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>

          </div>
        </div>
        
        {sortedPlan.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-16 text-center">

            <h2 className="text-2xl font-bold">
              Your plan is empty
            </h2>

            <p className="mt-3 text-zinc-400">
              Add workouts from the library
              to start your plan.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
            >
              Browse Workouts
            </Link>

          </div>
        ) : (
          <section className="mt-8">

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {sortedPlan.map(
                (workout: PlanWorkout) => (
                  <div
                    key={workout.id}
                    className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                  

        
                    <Link
                      href={`/workout/${workout.id}`}
                    >
                      <div className="relative aspect-4/3 overflow-hidden bg-zinc-900">

                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          className="object-cover transition duration-500 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                      </div>
                    </Link>


                    <div className="p-5">

                      <h2 className="text-xl font-bold">
                        {workout.name}
                      </h2>

                      <p className="mt-1 text-sm text-zinc-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-zinc-800 pt-4">

                        <div>
                          <p className="text-xs text-zinc-600">
                            TIME
                          </p>

                          <p className="mt-1 text-sm font-bold">
                            {workout.duration} min
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-zinc-600">
                            CAL
                          </p>

                          <p className="mt-1 text-sm font-bold">
                            {workout.caloriesBurned} kcal
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-zinc-600">
                            RATING
                          </p>

                          <p className="mt-1 text-sm font-bold text-lime-400">
                            ★ {workout.rating}
                          </p>
                        </div>

                      </div>

                      <div className="mt-5 flex gap-2">

                        {!workout.isDone ? (
                          <button
                            type="button"
                            onClick={() =>
                              markAsDone(
                                workout.id
                              )
                            }
                            className="flex-1 rounded-lg bg-lime-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-lime-300"
                          >
                            Mark Done
                          </button>
                        ) : (
                          <div className="flex-1 rounded-lg border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-center text-sm font-bold text-lime-400">
                            ✓ Completed
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            removeFromPlan(
                              workout.id
                            )
                          }
                          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:border-red-400 hover:text-red-400"
                        >
                          Remove
                        </button>

                      </div>

                    </div>
                  </div>
                )
              )}

            </div>
          </section>
        )}

        {saved.length > 0 && (
          <section className="mt-16 border-t border-zinc-800 pt-12">


            <div className="mb-8">

              <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
                Saved Workouts
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Saved
              </h2>

              <p className="mt-2 text-zinc-400">
                Your saved workouts. Move them
                to today&apos;s plan when&apos;re ready.
              </p>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {saved.map((workout) => (
                <div
                  key={workout.id}
                  className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
                >

                  <Link
                    href={`/workout/${workout.id}`}
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-zinc-900">

                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover transition duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                    </div>
                  </Link>

                  <div className="p-5">

                    <h3 className="text-xl font-bold">
                      {workout.name}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {workout.equipment}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-zinc-800 pt-4">

                      <div>
                        <p className="text-xs text-zinc-600">
                          TIME
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          {workout.duration} min
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-zinc-600">
                          CAL
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          {workout.caloriesBurned} kcal
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-zinc-600">
                          RATING
                        </p>

                        <p className="mt-1 text-sm font-bold text-lime-400">
                          ★ {workout.rating}
                        </p>
                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-5 flex gap-2">

                      <Link
                        href={`/workout/${workout.id}`}
                        className="flex-1 rounded-lg border border-zinc-700 px-4 py-2 text-center text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
                      >
                        View Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => {
                          const added =
                            addToPlan(workout);

                          if (added) {
                            removeFromSaved(
                              workout.id
                            );
                          }
                        }}
                        className="flex-1 rounded-lg bg-lime-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-lime-300"
                      >
                        Move to Plan
                      </button>

                    </div>

                    {/* Remove Saved */}
                    <button
                      type="button"
                      onClick={() =>
                        removeFromSaved(
                          workout.id
                        )
                      }
                      className="mt-2 w-full rounded-lg border border-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:border-red-400 hover:text-red-400"
                    >
                      Remove from Saved
                    </button>

                  </div>
                </div>
              ))}

            </div>
          </section>
        )}

      </div>
    </main>
  );
}