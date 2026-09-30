import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">

        
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="FitLog Logo"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-black tracking-wider">
            FITLOG
          </span>
        </div>

        
        <p className="text-center text-sm text-zinc-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}