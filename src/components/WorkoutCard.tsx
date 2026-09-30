import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types";

export default function WorkoutCard({
  workout,
}: {
  workout: Workout;
}) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50"
    >

      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
         <Image
            src={workout.image}
            alt={workout.name}
            fill 
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
         />
      </div>


      <div className="p-5">

        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-zinc-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-400" >
           
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-lg font-bold text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {workout.equipment}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-zinc-800 pt-4">
          <div>
            <p className="text-xs text-zinc-600">TIME</p>
            <p className="mt-1 text-sm font-bold">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-xs text-zinc-600">CAL</p>
            <p className="mt-1 text-sm font-bold">
              {workout.caloriesBurned}
            </p>
          </div>

          <div>
            <p className="text-xs text-zinc-600">RATING</p>
            <p className="mt-1 text-sm font-bold text-lime-400">
              ★ {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}