"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";
import type { Workout, PlanWorkout } from "@/types";

interface PlanContextType {
  plan: PlanWorkout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => boolean;
  addToSaved: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  metrics: {
    exercises: number;
    minutes: number;
    calories: number;
  };
}

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<PlanWorkout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  /* 
     LOAD FROM LOCAL STORAGE
  */

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        const parsedPlan: PlanWorkout[] = JSON.parse(storedPlan);
        setPlan(parsedPlan);
      }

      if (storedSaved) {
        const parsedSaved: Workout[] = JSON.parse(storedSaved);
        setSaved(parsedSaved);
      }
    } catch (error) {
      console.error("Failed to load localStorage:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);
  /* 
     SAVE PLAN
   */

  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, isHydrated]);

  /* 
     SAVE SAVED WORKOUTS
   */

  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, isHydrated]);

  /* 
     ADD TO PLAN
  */

  const addToPlan = (workout: Workout): boolean => {
    if (plan.length >= 5) {
      toast.error(
        "Today's plan is full! Max 5 workouts."
      );

      return false;
    }

    const alreadyExists = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      toast.error("Already in today's plan!");
      return false;
    }

    const newWorkout: PlanWorkout = {
      ...workout,
      isDone: false,
    };

    setPlan((prev) => [...prev, newWorkout]);

    toast.success(
      `${workout.name} added to plan! 💪`
    );

    return true;
  };

  /* 
     ADD TO SAVED
   */

  const addToSaved = (workout: Workout) => {
    const alreadyExists = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      toast.error("Already saved!");
      return;
    }

    setSaved((prev) => [...prev, workout]);

    toast.success(
      `${workout.name} saved for later!`
    );
  };

  /* 
     REMOVE FROM PLAN
   */

  const removeFromPlan = (id: number) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Removed from plan");
  };

  /* 
     REMOVE FROM SAVED
   */

  const removeFromSaved = (id: number) => {
    setSaved((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Removed from saved");
  };

  /* 
     MARK AS DONE
   */

  const markAsDone = (id: number) => {
    setPlan((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              isDone: true,
            }
          : item
      )
    );

    toast.success(
      "Workout done! Great job! 🎉"
    );
  };

  /* 
     METRICS
   */

  const metrics = {
    exercises: plan.length,

    minutes: plan.reduce(
      (total, item) =>
        total + item.duration,
      0
    ),

    calories: plan.reduce(
      (total, item) =>
        total + item.caloriesBurned,
      0
    ),
  };

  /* 
     CONTEXT VALUE
   */

  const value: PlanContextType = {
    plan,
    saved,

    addToPlan,
    addToSaved,

    removeFromPlan,
    removeFromSaved,

    markAsDone,

    metrics,
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
    </PlanContext.Provider>
  );
}

/* 
   USE PLAN HOOK
 */

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used within a PlanProvider"
    );
  }

  return context;
}