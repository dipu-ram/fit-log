import { Workout } from "@/types";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

/* 
Get all workouts
*/
export async function getAllWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

/* Get single workout by ID
*/
export async function getWorkoutById(id: string): Promise<Workout> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  return response.json();
}