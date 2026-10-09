
import { Workout } from "@/types";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export async function getAllWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch workouts: ${response.status}`);
  }

  return response.json();
}

export async function getWorkoutById(id: string): Promise<Workout> {
  const response = await fetch(
    `${API_URL}/${encodeURIComponent(id)}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(`Workout not found: ${response.status}`);
  }

  return response.json();
}
