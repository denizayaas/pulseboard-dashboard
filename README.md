# PulseBoard Dashboard

[Live Demo](https://pulseboard-dashboard.vercel.app/)

PulseBoard is a modern analytics dashboard built with React, TypeScript, Tailwind CSS, and Recharts.  
It was developed as a portfolio showcase project to demonstrate dashboard UI development, typed data structures, reusable components, responsive layouts, and interactive chart filtering.

## Overview

PulseBoard presents a SaaS-style analytics experience with dynamic business metrics, interactive revenue charts, campaign performance data, progress tracking, activity feeds, and workspace settings.

The project focuses on clean component structure, modern UI patterns, and frontend-only data visualization.

## Features

- Responsive dashboard layout
- Sidebar navigation with section anchors
- Dynamic date range filter
- Date range based stat cards
- Interactive revenue chart with Recharts
- Traffic source donut chart
- AI-style performance insight banner
- Campaign ROI table
- Business goals progress panel
- Top products section
- Recent activity feed
- Interactive settings toggles
- Typed dashboard data models with TypeScript
- Production build support with Vite

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React

## Project Structure

```txt
src/
  components/
    dashboard/
      CampaignTable.tsx
      DateRangeFilter.tsx
      GoalsPanel.tsx
      KpiInsight.tsx
      RecentActivity.tsx
      RevenueChart.tsx
      SettingsPanel.tsx
      StatCard.tsx
      TopProducts.tsx
      TrafficChart.tsx
    layout/
      Header.tsx
      Sidebar.tsx
  data/
    dashboardData.ts
  types/
    dashboard.ts
  App.tsx
  index.css
  main.tsx
```

## 🚀 Getting Started

Follow the steps below to run PulseBoard locally.

### 1. Clone the repository

```bash
git clone https://github.com/denizayaas/pulseboard-dashboard.git
```

### 2. Navigate to the project folder

```bash
cd pulseboard-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project will run locally on:

```bash
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## 🧠 Key Implementation Details

PulseBoard is built with a clean and maintainable frontend structure. The dashboard uses a strongly typed `DateRange` model to control selected time periods across the application.

When the user changes the selected date range, multiple parts of the dashboard update together:

* Stat cards
* Revenue chart data
* AI performance insight content
* Date range summary text

Dashboard data is separated from UI components inside:

```txt
src/data/dashboardData.ts
```

Shared TypeScript models are defined inside:

```txt
src/types/dashboard.ts
```

This keeps the project easier to scale, improves readability, and makes the component architecture cleaner.

---

## 🎯 Portfolio Purpose

This project was developed as a frontend portfolio showcase to demonstrate practical dashboard development skills.

It highlights:

* React component architecture
* TypeScript data modeling
* Responsive dashboard layout
* Data visualization with Recharts
* Tailwind CSS based UI design
* State-driven interactive UI behavior
* Reusable and maintainable component structure
* Production-ready Vite build workflow

PulseBoard is designed to look and feel like a modern SaaS analytics product while remaining focused on frontend implementation.


Author
Deniz Ayas
