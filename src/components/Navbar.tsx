"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        
        <div className="flex h-16 items-center justify-between">

          
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/assets/logo.png"
              alt="FitLog Logo"
              width={42}
              height={42}
              priority
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />

            <span className="text-lg font-black tracking-wider text-white sm:text-xl">
              FIT<span className="text-lime-400">LOG</span>
            </span>
          </Link>

          
          <nav className="ml-auto mr-5 hidden items-center gap-6 whitespace-nowrap md:flex lg:gap-8">

          
            <Link
              href="/"
              className={`shrink-0 text-sm font-black uppercase transition lg:text-base ${
                isHome
                  ? "text-lime-400"
                  : "text-zinc-300 hover:text-lime-400"
              }`}
            >
              WORKOUTS
            </Link>

            
            <Link
              href="/my-plan"
              className={`shrink-0 text-sm font-black uppercase transition lg:text-base ${
                isMyPlan
                  ? "text-lime-400"
                  : "text-zinc-300 hover:text-lime-400"
              }`}
            >
              MY PLAN
            </Link>

            
            <Link
              href="/my-plan"
              className="shrink-0 text-sm font-black uppercase text-lime-400 transition hover:text-lime-300 lg:text-base"
            >
              PLAN {plan.length}
            </Link>

           
            <Link
              href="/my-plan"
              className="shrink-0 text-sm font-black uppercase text-zinc-300 transition hover:text-lime-400 lg:text-base"
            >
              SAVED {saved.length}
            </Link>

          </nav>

          
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-2xl font-black leading-none transition ${
              menuOpen
                ? "border-lime-400 text-lime-400"
                : "border-zinc-700 text-zinc-300 hover:border-lime-400 hover:text-lime-400"
            }`}
          >
            ⋮
          </button>
        </div>

       
        {menuOpen && (
          <div className="border-t border-zinc-800 py-4">
            <div className="grid gap-2 sm:grid-cols-4">

              
              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 transition hover:border-lime-400"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Today
                </p>

                <p className="mt-1 text-sm font-black uppercase text-lime-400">
                  PLAN {plan.length}
                </p>
              </Link>

             
              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 transition hover:border-lime-400"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Library
                </p>

                <p className="mt-1 text-sm font-black uppercase text-zinc-300">
                  SAVED {saved.length}
                </p>
              </Link>

              
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 transition hover:border-lime-400 ${
                  isHome ? "border-lime-400" : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Library
                </p>

                <p
                  className={`mt-1 text-sm font-black uppercase ${
                    isHome
                      ? "text-lime-400"
                      : "text-zinc-300"
                  }`}
                >
                  WORKOUTS
                </p>
              </Link>

             
              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 transition hover:border-lime-400 ${
                  isMyPlan ? "border-lime-400" : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Training
                </p>

                <p
                  className={`mt-1 text-sm font-black uppercase ${
                    isMyPlan
                      ? "text-lime-400"
                      : "text-zinc-300"
                  }`}
                >
                  MY PLAN
                </p>
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}