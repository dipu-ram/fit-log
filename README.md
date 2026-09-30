# 🏋️ FitLog — Workout Library

> **Train with intent. Log every set.**

FitLog is a modern and responsive workout library built with **Next.js, TypeScript, and Tailwind CSS**. Browse workouts, explore detailed exercise information, build your daily workout plan, and save workouts for later.

---

## 📖 About FitLog

FitLog helps users organize their workouts in a simple and focused interface.

Users can:

* Browse **12 workouts** covering major muscle groups
* View detailed workout information
* Add workouts to **Today's Plan**
* Save workouts for later
* Track workout duration and calories
* Mark completed workouts
* Sort workouts by different metrics
* Keep their data after refreshing the browser

All plan and saved workout data is stored locally using **localStorage**.

---

## ✨ Features

### 🏋️ Workout Library

* 12 workout exercises
* Workout images
* Muscle group information
* Equipment details
* Duration, calories, and rating
* Responsive workout card layout

### 📋 Workout Details

* Dynamic workout detail pages
* Exercise description
* Equipment information
* Difficulty level
* Sets and reps
* Workout duration
* Estimated calories
* Step-by-step instructions

### 📅 Today's Plan

* Add workouts to today's plan
* Maximum **5 workouts**
* Duplicate workout protection
* Mark workouts as completed
* Remove workouts from the plan

### 💾 Saved Workouts

* Save workouts for later
* Remove saved workouts
* Move saved workouts to Today's Plan

### 📊 Workout Metrics

Track your current plan with:

* **Exercises**
* **Minutes**
* **Calories**

### 🔀 Sorting

Sort workouts by:

* Default
* Duration
* Calories
* Rating

### 🔔 Notifications

Instant toast notifications for:

* Adding workouts
* Saving workouts
* Removing workouts
* Marking workouts as completed
* Duplicate workouts
* Plan limit reached

### 💾 Local Storage

Today's Plan and Saved Workouts remain available after refreshing the browser.

### 📱 Responsive Design

Fully responsive across:

* Mobile
* Tablet
* Desktop

### ⚡ Loading & Error Handling

Includes:

* Loading skeletons
* API error handling
* Empty states
* Custom 404 page

---

## 🛠️ Technologies

| Technology          | Purpose                        |
| ------------------- | ------------------------------ |
| **Next.js**         | React framework and App Router |
| **React**           | User interface                 |
| **TypeScript**      | Type-safe development          |
| **Tailwind CSS**    | Styling and responsive design  |
| **Context API**     | Global state management        |
| **React Hot Toast** | Toast notifications            |
| **localStorage**    | Data persistence               |
| **Next/Image**      | Image optimization             |

---

## 🔌 API

FitLog uses the following API to load workout data.

### Base URL

```text
https://api.abcz.workers.dev/api/fitlog
```

### Endpoints

| Endpoint          | Method | Description            |
| ----------------- | ------ | ---------------------- |
| `/api/fitlog`     | GET    | Fetch all workouts     |
| `/api/fitlog/:id` | GET    | Fetch a single workout |

---

## 📁 Project Structure

```text
fit-log/
│
├── public/
│   └── assets/
│       ├── logo.png
│       └── banner.png
│
├── src/
│   │
│   ├── app/
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── my-plan/
│   │   │   └── page.tsx
│   │   │
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
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fit-log.git
```

### 2. Go to the Project Directory

```bash
cd fit-log
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🌐 Routes

| Route           | Description                     |
| --------------- | ------------------------------- |
| `/`             | Home page and workout library   |
| `/workout/[id]` | Workout details                 |
| `/my-plan`      | Today's Plan and Saved Workouts |
| `404`           | Custom not-found page           |

---

## 🧠 State Management

FitLog uses **React Context API** for global state management.

The `PlanContext` handles:

* Today's Plan
* Saved Workouts
* Add workout
* Remove workout
* Mark as done
* Plan metrics
* Saved and Plan counters

Data is persisted using browser **localStorage**.

### Plan Limit

A maximum of **5 workouts** can be added to Today's Plan.

---

## 🎨 Design

FitLog uses a dark gym-inspired interface with:

* Black background
* Lime accent color
* Responsive layouts
* Modern workout cards
* Smooth hover effects
* Clean typography
* Mobile-friendly navigation

---

## 📱 Responsive Design

FitLog is optimized for:

```text
📱 Mobile
   ↓
📲 Tablet
   ↓
💻 Desktop
```

The Navbar, Hero, Workout Library, Workout Details, My Plan, and Footer are responsive across different screen sizes.

---

## 🔄 User Flow

```text
                 FITLOG
                    │
                    ▼
                  HOME
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     WORKOUT LIBRARY        MY PLAN
          │                   │
          ▼              ┌────┴────┐
   WORKOUT DETAILS       ▼         ▼
          │            PLAN      SAVED
      ┌───┴───┐         │
      ▼       ▼         ▼
    ADD      SAVE    MARK DONE
    PLAN     LATER      │
      │                 ▼
      └────────────► REMOVE
```

---

## ☁️ Deployment

FitLog can be deployed using **Vercel**.

### Steps

1. Push the project to GitHub.
2. Open Vercel.
3. Sign in with GitHub.
4. Import the FitLog repository.
5. Vercel automatically detects Next.js.
6. Click **Deploy**.
7. Wait for deployment to complete.
8. Open your live website.

---

## 🌍 Live Demo

**Live Website:**
`https://your-fitlog.vercel.app`

> Replace this URL with your actual Vercel URL after deployment.

---

## 📝 Git Commits

The project follows meaningful feature-based commits:

```text
1. Initialize Next.js project with Tailwind CSS
2. Define TypeScript types and API utility functions
3. Add Context API for plan and saved state management
4. Create Navbar with active links and badge counters
5. Add Hero banner and Workout Library grid
6. Build Workout Details page with dynamic routing
7. Create My Plan page with sorting and workout metrics
8. Add Footer, 404 page, loading states and responsive design
```

---

## ✅ Final Checklist

Before deployment, make sure:

* [ ] Home page works
* [ ] Workout library loads
* [ ] Workout cards open details
* [ ] Add to Plan works
* [ ] Maximum 5 workouts enforced
* [ ] Duplicate workouts prevented
* [ ] Save Workout works
* [ ] Navbar counters update
* [ ] My Plan works
* [ ] Sorting works
* [ ] Mark as Done works
* [ ] Remove works
* [ ] Metrics update correctly
* [ ] localStorage works after refresh
* [ ] Loading state works
* [ ] Empty state works
* [ ] 404 page works
* [ ] Mobile responsive
* [ ] Tablet responsive
* [ ] Desktop responsive
* [ ] `npm run build` succeeds
* [ ] Vercel deployment works

---

## 👨‍💻 Author

### Dipu Ram Roy

**Full Stack Web Developer | MERN Stack Developer**

Bangladesh 🇧🇩

### GitHub

`https://github.com/dipu-ram`

---

<div align="center">

## 💪 Train Hard. Log Honest.

Built with ❤️ using **Next.js + TypeScript + Tailwind CSS**

</div>
