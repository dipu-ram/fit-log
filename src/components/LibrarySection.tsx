
"use client";

import { useEffect, useState } from "react";
import { Workout } from "@/types";
import { getAllWorkouts } from "@/utils/api";
import WorkoutCard from "@/components/WorkoutCard";

export default function LibrarySection() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAllWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load workouts.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <section
      id="library"
      className="bg-black px-5 py-16 text-white sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-10">
         

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            The Library
          </h2>

          <p className="mt-3 text-base leading-7 text-zinc-400 sm:text-lg">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-96 animate-pulse overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
              >
                <div className="h-56 bg-zinc-900" />
                <div className="space-y-3 p-5">
                  <div className="h-4 w-1/3 rounded bg-zinc-800" />
                  <div className="h-6 w-3/4 rounded bg-zinc-800" />
                  <div className="h-4 w-1/2 rounded bg-zinc-900" />
                </div>
              </div>
            ))}
          </div>
        )}
              {!loading && error && (
          <div className="rounded-xl border border-red-900 bg-red-950/30 p-6 text-red-400">
            <h3 className="text-lg font-bold">
              Unable to load workouts
            </h3>
            <p className="mt-2 text-sm">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-400"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && workouts.length === 0 && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-10 text-center">
            <h3 className="text-xl font-bold">
              No workouts found
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              There are no workouts available right now.
            </p>
          </div>
        )}
 
        {!loading && !error && workouts.length > 0 && (
          <>
            <div className="mb-5 flex items-center justify-between">
              
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-bold text-lime-400">
                {workouts.length} Workouts
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {workouts.map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}