# PulseBoard Dashboard

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
