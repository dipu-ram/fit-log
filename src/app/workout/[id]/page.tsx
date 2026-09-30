"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { usePlan } from "@/context/PlanContext";
import { getWorkoutById } from "@/utils/api";
import { Workout } from "@/types";

type WorkoutPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default function WorkoutDetails({
  params,
}: WorkoutPageProps) {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    plan,
    saved,
    addToPlan,
    removeFromPlan,
    addToSaved,
    removeFromSaved,
  } = usePlan();

  useEffect(() => {
    async function loadWorkout() {
      try {
        const { id } = await params;
        const data = await getWorkoutById(id);
        setWorkout(data);
      } catch {
        setError("Workout not found.");
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, [params]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="text-zinc-400">Loading workout...</p>
      </main>
    );
  }

  if (error || !workout) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black px-5 text-center text-white">
        <h1 className="text-3xl font-black">Workout Not Found</h1>

        <p className="mt-3 text-zinc-400">
          The workout you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-lime-400 px-6 py-3 font-bold text-black hover:bg-lime-300"
        >
          Back to Workouts
        </Link>
      </main>
    );
  }
  const isInPlan = plan.some(
    (item) => String(item.id) === String(workout.id)
  );

  const isSaved = saved.some(
    (item) => String(item.id) === String(workout.id)
  );

  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-zinc-400 transition hover:text-lime-400"
        >
          ← Back to Workouts
        </Link>
    
        <div className="grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 lg:grid-cols-2">
      
          <div className="relative min-h-320px bg-zinc-900 lg:min-h-600px">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
         
          <div className="p-6 sm:p-10">
            
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime-400"
                >
                  {muscle}
                </span>
              ))}
            </div>
            
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              {workout.name}
            </h1>
           
            <p className="mt-5 leading-7 text-zinc-400">
              {workout.description}
            </p>
           
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">

              <div className="rounded-lg border border-zinc-800 bg-black p-4">
                <p className="text-xs text-zinc-600">EQUIPMENT</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.equipment}
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-black p-4">
                <p className="text-xs text-zinc-600">DIFFICULTY</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-black p-4">
                <p className="text-xs text-zinc-600">SETS</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.sets}
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-black p-4">
                <p className="text-xs text-zinc-600">REPS</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.reps}
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-black p-4">
                <p className="text-xs text-zinc-600">DURATION</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.duration} min
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-black p-4">
                <p className="text-xs text-zinc-600">CALORIES</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-black p-4 sm:col-span-3">
                <p className="text-xs text-zinc-600">RATING</p>
                <p className="mt-2 font-bold text-lime-400">
                  ★ {workout.rating}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-black">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-6 text-zinc-400"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

   
            <div className="mt-10 flex flex-wrap gap-3">

        
              <button
                type="button"
                onClick={() =>
                  isInPlan
                    ? removeFromPlan(Number(workout.id))
                    : addToPlan(workout)
                }
                className={`rounded-lg px-5 py-3 text-sm font-bold transition ${
                  isInPlan
                    ? "border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                {isInPlan
                  ? "✓ Remove from today's plan"
                  : "+ Add to today's plan"}
              </button>

              <button
                type="button"
                onClick={() =>
                  isSaved
                    ? removeFromSaved(Number(workout.id))
                    : addToSaved(workout)
                }
                className={`rounded-lg border px-5 py-3 text-sm font-bold transition ${
                  isSaved
                    ? "border-lime-400 text-lime-400 hover:bg-zinc-900"
                    : "border-zinc-700 text-white hover:border-lime-400 hover:text-lime-400"
                }`}
              >
                {isSaved ? "♥ Saved" : "♡ Save"}
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}