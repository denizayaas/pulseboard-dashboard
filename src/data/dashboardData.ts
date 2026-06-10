import {
  Activity,
  CheckCircle2,
  CreditCard,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import type {
  ActivityItem,
  CampaignItem,
  DateRange,
  GoalItem,
  ProductItem,
  RevenueItem,
  StatItem,
  TrafficItem,
} from '../types/dashboard'

export const statsByRange: Record<DateRange, StatItem[]> = {
  'Last 7 days': [
    {
      title: 'Total Revenue',
      value: '$23.6K',
      change: '+6.4% from last week',
      icon: Wallet,
    },
    {
      title: 'Active Users',
      value: '4,218',
      change: '+3.8% from last week',
      icon: Users,
    },
    {
      title: 'Transactions',
      value: '2,940',
      change: '+4.2% from last week',
      icon: CreditCard,
    },
    {
      title: 'Conversion Rate',
      value: '6.9%',
      change: '+1.1% from last week',
      icon: Activity,
    },
  ],
  'Last 30 days': [
    {
      title: 'Total Revenue',
      value: '$67.4K',
      change: '+9.8% from last month',
      icon: Wallet,
    },
    {
      title: 'Active Users',
      value: '12,486',
      change: '+6.1% from last month',
      icon: Users,
    },
    {
      title: 'Transactions',
      value: '8,720',
      change: '+5.4% from last month',
      icon: CreditCard,
    },
    {
      title: 'Conversion Rate',
      value: '7.3%',
      change: '+1.6% from last month',
      icon: Activity,
    },
  ],
  'Last 12 months': [
    {
      title: 'Total Revenue',
      value: '$128.4K',
      change: '+12.5% from last year',
      icon: Wallet,
    },
    {
      title: 'Active Users',
      value: '24,892',
      change: '+8.2% from last year',
      icon: Users,
    },
    {
      title: 'Transactions',
      value: '18,340',
      change: '+5.7% from last year',
      icon: CreditCard,
    },
    {
      title: 'Conversion Rate',
      value: '7.8%',
      change: '+2.1% from last year',
      icon: Activity,
    },
  ],
}

export const revenueDataByRange: Record<DateRange, RevenueItem[]> = {
  'Last 7 days': [
    { month: 'Mon', revenue: 12800 },
    { month: 'Tue', revenue: 14600 },
    { month: 'Wed', revenue: 13900 },
    { month: 'Thu', revenue: 17200 },
    { month: 'Fri', revenue: 18400 },
    { month: 'Sat', revenue: 21100 },
    { month: 'Sun', revenue: 23600 },
  ],
  'Last 30 days': [
    { month: 'Week 1', revenue: 42000 },
    { month: 'Week 2', revenue: 51500 },
    { month: 'Week 3', revenue: 58200 },
    { month: 'Week 4', revenue: 67400 },
  ],
  'Last 12 months': [
    { month: 'Jan', revenue: 32000 },
    { month: 'Feb', revenue: 41000 },
    { month: 'Mar', revenue: 38000 },
    { month: 'Apr', revenue: 52000 },
    { month: 'May', revenue: 61000 },
    { month: 'Jun', revenue: 74000 },
    { month: 'Jul', revenue: 69000 },
    { month: 'Aug', revenue: 88000 },
  ],
}

export const trafficData: TrafficItem[] = [
  { name: 'Organic', value: 42, color: '#06b6d4' },
  { name: 'Social', value: 28, color: '#8b5cf6' },
  { name: 'Referral', value: 18, color: '#22c55e' },
  { name: 'Paid Ads', value: 12, color: '#f97316' },
]

export const products: ProductItem[] = [
  {
    name: 'Pulse Pro Plan',
    category: 'Subscription',
    revenue: '$42,800',
    growth: '+14.2%',
  },
  {
    name: 'Analytics Add-on',
    category: 'SaaS Feature',
    revenue: '$28,400',
    growth: '+9.8%',
  },
  {
    name: 'Team Workspace',
    category: 'Collaboration',
    revenue: '$19,250',
    growth: '+6.4%',
  },
  {
    name: 'Automation Pack',
    category: 'Productivity',
    revenue: '$13,900',
    growth: '+4.1%',
  },
]

export const activities: ActivityItem[] = [
  {
    title: 'New enterprise subscription',
    description: 'Pulse Pro Plan purchased by Acme Inc.',
    time: '2 min ago',
    icon: CreditCard,
  },
  {
    title: 'User milestone reached',
    description: 'Active users increased by 8.2% this month.',
    time: '18 min ago',
    icon: UserPlus,
  },
  {
    title: 'Automation rule completed',
    description: 'Monthly revenue report was generated.',
    time: '1 hour ago',
    icon: Zap,
  },
  {
    title: 'Campaign goal completed',
    description: 'Referral campaign reached 92% of target.',
    time: '3 hours ago',
    icon: CheckCircle2,
  },
]

export const goalsData: GoalItem[] = [
  {
    title: 'Revenue Goal',
    value: '$128.4K / $150K',
    progress: 86,
    description: 'Monthly revenue target completion',
  },
  {
    title: 'User Growth',
    value: '24.8K / 30K',
    progress: 82,
    description: 'Active user acquisition progress',
  },
  {
    title: 'Conversion Target',
    value: '7.8% / 10%',
    progress: 78,
    description: 'Checkout conversion performance',
  },
]

export const campaignData: CampaignItem[] = [
  {
    name: 'Summer Growth Push',
    channel: 'Paid Ads',
    spend: '$8,400',
    revenue: '$24,900',
    status: 'Active',
    roi: '2.9x',
  },
  {
    name: 'Referral Boost',
    channel: 'Referral',
    spend: '$3,200',
    revenue: '$13,700',
    status: 'Active',
    roi: '4.2x',
  },
  {
    name: 'Enterprise Outreach',
    channel: 'Email',
    spend: '$5,100',
    revenue: '$18,600',
    status: 'Completed',
    roi: '3.6x',
  },
  {
    name: 'Social Awareness',
    channel: 'Social',
    spend: '$2,800',
    revenue: '$6,400',
    status: 'Paused',
    roi: '2.2x',
  },
]