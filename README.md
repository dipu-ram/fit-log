# 🏋️ FitLog — Workout Library

> **Train with intent. Log every set.**

FitLog is a modern and responsive workout library built with **Next.js, TypeScript, and Tailwind CSS**. Explore workouts, view detailed instructions, create your daily plan, and save workouts for later.

![FitLog Banner](./public/assets/banner.png)

---

## 📖 Overview

FitLog provides a simple way to discover and organize workouts.

Users can:

* Browse **12 workouts**
* View detailed workout information
* Add up to **5 workouts** to Today's Plan
* Save workouts for later
* Mark workouts as completed
* Sort workouts
* Track exercises, minutes, and calories
* Keep data after page refresh using `localStorage`

---

## ✨ Features

* 🏋️ **Workout Library** — 12 workouts with images, muscle groups, equipment, and stats.
* 📋 **Workout Details** — Dynamic pages with instructions, sets, reps, difficulty, and statistics.
* 📅 **Today's Plan** — Create a daily plan with a maximum of 5 workouts.
* 💾 **Saved Workouts** — Save and manage workouts for later.
* 📊 **Workout Metrics** — Track total exercises, minutes, and calories.
* 🔀 **Sorting** — Sort workouts by duration, calories, and rating.
* 🔔 **Toast Notifications** — Instant feedback for user actions.
* 💾 **Local Storage** — Plan and saved workouts persist after refresh.
* 📱 **Responsive Design** — Works on mobile, tablet, and desktop.
* ⚡ **Loading & Error States** — Includes loading skeletons, empty states, and error handling.
* 🎯 **Custom 404** — Custom page for invalid routes.

---

## 🛠️ Technologies

| Technology          | Purpose                            |
| ------------------- | ---------------------------------- |
| **Next.js**         | App Router & application framework |
| **React**           | UI development                     |
| **TypeScript**      | Type safety                        |
| **Tailwind CSS**    | Styling & responsive design        |
| **Context API**     | Global state management            |
| **React Hot Toast** | Notifications                      |
| **localStorage**    | Data persistence                   |

---

## 🔌 API

**Base URL**

```text
https://api.abcz.workers.dev/api/fitlog
```

| Endpoint          | Method | Description          |
| ----------------- | ------ | -------------------- |
| `/api/fitlog`     | GET    | Get all workouts     |
| `/api/fitlog/:id` | GET    | Get a single workout |

---

## 📁 Project Structure

```text
fit-log/
├── public/
│   └── assets/
│       ├── logo.png
│       └── banner.png
│
├── src/
│   ├── app/
│   │   ├── workout/[id]/page.tsx
│   │   ├── my-plan/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── LibrarySection.tsx
│   │   └── Footer.tsx
│   │
│   ├── context/
│   │   └── PlanContext.tsx
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── utils/
│       └── api.ts
│
└── README.md
```

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/dipu-ram/fit-log.git
cd fit-log
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## 🌐 Routes

| Route           | Description                   |
| --------------- | ----------------------------- |
| `/`             | Workout library               |
| `/workout/[id]` | Workout details               |
| `/my-plan`      | Today's Plan & Saved Workouts |
| `404`           | Custom not-found page         |

---

## ☁️ Deployment

FitLog can be deployed easily with **Vercel**.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel detects Next.js automatically.
4. Click **Deploy**.

### Live Demo

🔗 **https://your-fitlog.vercel.app**

> Replace this with your actual Vercel URL.

---

## 👨‍💻 Author

**Dipu Ram Roy**

Full Stack Web Developer | MERN Stack Developer 🇧🇩

🔗 GitHub: **https://github.com/dipu-ram**

---

<div align="center">

### 💪 Train Hard. Log Honest.

Built with ❤️ using **Next.js · TypeScript · Tailwind CSS**

</div>
