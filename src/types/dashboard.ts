import type { LucideIcon } from 'lucide-react'

export type StatItem = {
  title: string
  value: string
  change: string
  icon: LucideIcon
}

export type RevenueItem = {
  month: string
  revenue: number
}

export type TrafficItem = {
  name: string
  value: number
  color: string
}

export type ProductItem = {
  name: string
  category: string
  revenue: string
  growth: string
}

export type ActivityItem = {
  title: string
  description: string
  time: string
  icon: LucideIcon
}

export type DateRange = 'Last 7 days' | 'Last 30 days' | 'Last 12 months'